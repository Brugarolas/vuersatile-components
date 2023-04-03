<template lang="pug">
.input-multi-select(:data-field-name="name", :data-options-state="dataStateOptions", :class="componentClass", @keydown.esc="close", @keydown.enter="selectFilteredResults")
    .input-multi-select__label-container(v-if="label || allowClear")
      label.input-multi-select__label(v-if="label") {{ label }}

      TransitionHeight(v-if="allowClear")
        button.input-multi-select__clear-button(v-show="showClearButton", type="button", @click.prevent="clear") {{ $t('GENERIC.CLEAR') }}

    .input-multi-select__wrapper(v-click-outside="close")
      input.input-multi-select__input(ref="input", type="text", readonly="readonly", :name="name", :placeholder="placeholderMessage", @click.prevent="toggle")

      .input-multi-select__content(@click="toggle")
        .input-multi-select__selected-container
          .input-multi-select__selected-wrapper
            Tag.input-multi-select__selected-tag(
              v-for="option in optionsSelected",
              :key="option.key",
              :text="option.label",
              color="blue",
              :showCloseButton="true",
              @close="stopPropagation($event); unselect(option)",
              @click="stopPropagation($event)"
            )

        span.input-multi-select__num-selected(v-show="hasAnySelected && numSelected > 1") {{ numSelected }}

        button.input-multi-select__open-button(type="button", @click.prevent)
          Icon(icon="chevron-down")

      TransitionFadeSelect
        ul.input-multi-select__option-list(
          v-show="isOpen",
          ref="selectOptions",
          :style="dropdownStyle",
          :data-select-options="name",
          :class="{ 'input-multi-select__option-list--outside': mountOptionsOutside }",
          @click="stopPropagation"
        )
          li.input-multi-select__search-bar-wrapper(v-if="allowSearch")
            InputBase.input-multi-select__search-bar(
              :value="search",
              name="Search",
              icon="magnifying-glass",
              :placeholder="$t('Search')",
              @input="inputSearch"
            )
          li.input-multi-select__option-item(
            v-for="(option, index) in filteredOptions",
            :key="option.key",
            :data-item="`${name}-${index}`"
            :data-item-key="option.key"
          )
            CheckboxBase.input-multi-select__checkbox(
              :checked="selected[option.key]",
              :name="`${name}-${index}`",
              :label="option.label",
              :disabled="option.disabled",
              :ref="saveRef(option.key)",
              @click="stopPropagation($event, false)",
              @change="toggleSelect($event, option)"
            )

    TransitionHeight
      .input-multi-select__error(v-if="shouldShowErrors") {{ errorMessage }}
</template>

<script>
import { CheckboxBase, InputBase, RequiredInputMixin } from './_internal'
import { TransitionHeight } from '@/components/transition'
import Icon from '@/components/info/Icon.vue'
import Tag from '@/components/interactive/Tag.vue'
import TransitionFadeSelect from '@/components/transition/TransitionFadeSelect.vue'
import { DropdownUtils } from '@/mixins'

export default {
  components: {
    TransitionHeight,
    Tag,
    TransitionFadeSelect,
    CheckboxBase,
    InputBase,
    Icon
  },

  mixins: [
    RequiredInputMixin,
    DropdownUtils
  ],

  props: {
    initialValue: {
      type: Array,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: null
    },
    optionValueKey: {
      type: String,
      default: 'value'
    },
    optionLabelKey: {
      type: String,
      default: 'text'
    },
    optionDisabledKey: {
      type: String,
      default: 'disabled'
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: [],
      emptyValue: [],
      isOpen: false,
      selected: {},
      search: null,
      algo: {}
    }
  },

  computed: {
    /* Own computed properties */
    componentClass () {
      return {
        'input-multi-select--open': this.isOpen,
        'input-multi-select--disabled': this.disabled,
        'input-multi-select--error': this.shouldShowErrors
      }
    },
    numSelected () {
      return this.value?.length || 0
    },
    hasAnySelected () {
      return Boolean(this.numSelected)
    },
    showClearButton () {
      return this.hasAnySelected && this.allowClear && !this.disabled
    },
    placeholderMessage () {
      return this.hasAnySelected ? null : this.placeholder
    },
    dataStateOptions () {
      return this.isOpen ? 'open' : 'closed'
    },
    searchFilter () {
      return this.search?.trim() || ''
    },
    isSearchActive () {
      return this.allowSearch && this.searchFilter
    },

    errorMessage () {
      if (!this.shouldShowErrors) {
        return
      }

      return this.$t('FORM.ERROR.NOT_EMPTY')
    },
    selectableOptions () {
      const selectableOptions = []

      for (let i = 0; i < this.options.length; i++) {
        const option = this.options[i]

        const value = option[this.optionValueKey]
        const label = option[this.optionLabelKey]
        const disabled = option[this.optionDisabledKey]
        const key = this.getKeyFromValue(value)

        selectableOptions.push({ value, label, key, disabled })
      }

      return selectableOptions
    },

    filteredOptions () {
      if (!this.allowSearch || !this.searchFilter) {
        return this.selectableOptions
      }

      const searchText = this.searchFilter.toLowerCase()

      return this.selectableOptions.filter((option) => {
        const optionText = option.label.toLowerCase()

        // Or option is selected, or text matches
        return this.selected[option.key] || optionText.includes(searchText)
      })
    },

    optionsSelected () {
      return this.value.map(value => {
        const option = this.selectableOptions.find(option => option.value.id === value.id)

        return option || { value, label: value, key: value }
      })
    },

    /* Overriden mixin methods */
    isValid () {
      if (this.disabled) {
        return true
      }

      return !this.required || this.hasAnySelected
    },

    dropdownElements () {
      return {
        content: this.$refs.selectOptions,
        sibling: this.$refs.input
      }
    }
  },

  created () {
    if (this.initialValue?.length) {
      this.value = [...this.initialValue]

      this.initialValue.forEach(value => {
        const key = this.getKeyFromValue(value)

        this.selected[key] = true
      })
    }
  },

  methods: {
    saveRef (key) {
      return function ($el, $refs) {
        if (!$refs.checkboxes) {
          $refs.checkboxes = {}
        }

        $refs.checkboxes[key] = $el
      }
    },

    inputSearch (event) {
      this.search = event.target.value
    },

    /* Input mixin overrided methods */
    shouldSetInitialValue () {
      return false
    },

    /* Own methods */
    _selectOptions (options) {
      options.forEach(option => {
        const checkbox = this.$refs.checkboxes[option.key]

        if (checkbox && !checkbox.value) {
          checkbox.value = true
        }
      })

      const selectedValues = new Set([...this.optionsSelected, ...options].map((option) => option.value))

      this.value = [...selectedValues]
    },

    stopPropagation (event, prevent = true) {
      event.stopPropagation()
      if (prevent) {
        event.preventDefault()
      }
    },

    getKeyFromValue (value) {
      if (value === null || value === undefined) {
        return `empty_${this.name}`
      }

      if (typeof value !== 'object') {
        return value
      }

      if (value._id || value.id) {
        return value._id || value.id
      }

      return JSON.stringify(value)
    },

    change () {
      this.dirty = true

      this.$emit('change', this.value)
    },
    clear () {
      this.dirty = true

      this.selectableOptions.forEach(option => {
        const checkbox = this.$refs.checkboxes[option.key]

        if (checkbox && checkbox.value) {
          checkbox.value = false
        }
      })

      this.value = []
      this.selected = {}

      this.$emit('change', this.value)
    },
    all () {
      this.dirty = true

      this._selectOptions(this.selectableOptions)

      this.$emit('change', this.value)
    },

    toggle () {
      if (this.disabled) {
        return
      }

      this.isOpen = !this.isOpen

      if (this.allowSearch && !this.isOpen) {
        this.search = null
      }

      if (!this.mountOptionsOutside) {
        return
      }

      if (this.isOpen) {
        this.mountElement()
      }
    },
    close () {
      this.isOpen = false
      this.search = null
    },

    toggleSelect (event, option) {
      this.dirty = true

      const isSelected = event.target.checked

      this.selected[option.key] = isSelected

      if (isSelected) {
        this.value.push(option.value)
      } else {
        this.value = this.value.filter(value => value.id !== option.value.id)
      }

      this.change()
    },

    selectFilteredResults () {
      if (!this.searchFilter || !this.filteredOptions?.length) {
        return
      }

      this.dirty = true

      this._selectOptions(this.filteredOptions)

      this.$emit('change', this.value)

      this.close()
    },

    unselect (option) {
      this.dirty = true

      this.selected[option.key] = false
      this.value = this.value.filter(value => value.id !== option.value.id)

      this.change()
    },

    reset () {
      this.dirty = false
      this.formIsDirty = false

      this.value = []
      this.selected = {}
    }
  }
}
</script>

<style lang="scss">
.input-multi-select {
  &--error {
    .input-multi-select__input {
      color: $input-text-error;
      border-color: $input-border-error;
    }

    .input-multi-select__open-button {
      color: $input-text-error;
    }
  }

  &--open {
    .input-multi-select__input {
      border-color: $input-border-active;
    }

    .input-multi-select__wrapper:after {
      opacity: 1;
    }

    .input-multi-select__open-button {
      color: $input-border-active;
      transform: rotate(180deg);
    }
  }

  &--disabled {
    .input-multi-select__open-button {
      color: $disabled-color;
    }

    .input-multi-select__selected-wrapper {
      color: $disabled-color;
    }
  }

  &__label-container {
    display: flex;
    flex-direction: column;
    padding-bottom: $space-2;

    @include media(sm) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__label {
    display: block;
    @include text-overflow-ellipsis;
    flex-shrink: 100;
    font-weight: $fw-semibold;
  }

  &__clear-button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    color: $primary-color-100;
    margin-top: $space-1;
    text-align: left;

    @include transition-height;

    @include media(sm) {
      margin-top: 0;
    }
  }

  &__wrapper {
    position: relative;

    &:after {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: $input-border-radius;
      box-shadow: $box-shadow-3;
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      transition: opacity .3s linear;
    }
  }

  &__input {
    width: 100%;
    border-radius: $input-border-radius;
    border: 1px solid $input-border;
    padding: $space-2 $space-3;
    cursor: pointer;
    height: 32px;

    @include button-reset-browser-tap-styles;
    transition: border-color .3s ease, border-color .3s ease;

    &::placeholder {
      color: $input-placeholder;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 $space-3;

    @include button-reset-browser-tap-styles;
    cursor: pointer;
  }

  &__selected-container {
    position: relative;
    flex: 1;
    overflow: hidden;
    margin-right: $space-2;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      bottom: -1px;
      right: -1px;
      width: 16px;
      background: linear-gradient(90deg, rgba($greyscale-color-0, 0), rgba($greyscale-color-0, 100%));
      z-index: 2;
    }
  }

  &__selected-wrapper {
    overflow: auto;
    white-space: nowrap;
    padding-right: $space-2;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__selected-tag {
    margin-right: $space-2;
    cursor: initial;
  }

  &__num-selected {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    color: $text-negative-color;
    background-color: $primary-color-100;
    font-weight: $fw-semibold;
    margin-right: $space-3;
  }

  &__open-button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    color: $greyscale-color-30;
    transition: color .3s ease, transform .3s ease;
    will-change: transform;
  }

  &__option-list {
    position: absolute;
    background-color: $input-background;
    border-radius: $input-border-radius;
    border: 1px solid $input-border;
    box-shadow: $box-shadow-3;
    width: 100%;
    max-height: 32vh;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 3;
    will-change: transform, opacity;

    &--outside {
      z-index: 10000;
    }
  }

  &__checkbox {
    padding: $space-2 $space-4;
    transition: background-color .3s linear;

    &:hover {
      background-color: $input-background;
    }

    &.checkbox-base {
      width: 100%;
    }
  }

  &__option-item:first-child &__checkbox {
    padding-top: $space-3;
  }

  &__option-item:last-child &__checkbox {
    padding-bottom: $space-3;
  }

  &__error {
    display: block;
    @include transition-height;
    font-size: $font-size-12;
    color: $input-text-error;
    padding: $space-1 0 $space-1 $space-2;
  }

  &__search-bar {
    margin: $space-2 $space-3;

    .input-base {
      &__input {
        background-color: transparent;
      }

      &__icon {
        padding-right: 0;

        &:after {
          display: none;
        }
      }
    }
  }
}
</style>
