<template lang="pug">
.input-select(:data-field-name="name", :class="componentClass", :data-options-state="dataStateOptions", @keydown.esc="close", @keydown.enter="selectFirstResult")
  .input-select__label-wrapper(v-if="label || allowClear")
    label.input-select__label-text {{ label }}

    TransitionHeight(v-if="allowClear")
      button.input-select__label-clear-button(v-show="showClearButton", type="button", @click.prevent="clear") {{ $t('GENERIC.CLEAR') }}

  InputBase.input-select__list-wrapper(
    v-click-outside="close",
    :outsideValue="optionSelected.label",
    :name="`${name}-input`",
    icon="chevron-down",
    iconSize="s",
    :placeholder="placeholderMessage"
    :disabled="disabled",
    :allowReadOnly="true",
    @iconClick="toggle",
    @click.prevent="toggle"
  )

  TransitionFadeSelect
    ul.input-select__list(
      v-show="isOpen",
      ref="selectOptions",
      :data-select-options="name",
      :class="{ 'input-select__list--outside': mountOptionsOutside }"
    )
      li.input-select__search-wrapper(v-if="allowSearch")
        //- TODO Replace input base with input search
        InputBase.input-select__search-bar(
          v-model="search",
          :name="'Search'",
          :icon="'magnifying-glass'",
          :placeholder="$t('Search')"
          @click.stop
        )
        .input-select__search-actions(v-if="allowAddOptions")
          Button(
            type="secondary-transparent",
            :text="$t('GENERIC.ADD')",
            :disabled="searchHasResults",
            @click="addOption"
          )
      li.input-select__list-item(
        v-for="(option, index) in filteredOptions",
        v-show="searchHasResults"
        :key="option.key",
        :class="{ 'input-select__list-item--selected': option.key === optionSelected.key }",
        @click.stop="select(option.value)",
        :data-item="`${name}-${index}`"
        :data-cy="dataCyOption"
      )
        span {{ option.label }}
      li.input-select__list-item.input-select__list-item--no-result(v-show="!searchHasResults")
        span {{ $t('GENERIC.NO_RESULTS') }}

  TransitionHeight
    p.input-select__error-message(v-if="shouldShowErrors") {{ errorMessage }}
</template>

<script>
import { InputBase, RequiredInputMixin } from './_internal'
import { TransitionFadeSelect, TransitionHeight } from '@/components/transition'
import { DropdownUtils } from '@/mixins'
import { Button } from '@/components/interactive'

export default {
  components: {
    Button,
    InputBase,
    TransitionHeight,
    TransitionFadeSelect
  },
  mixins: [RequiredInputMixin, DropdownUtils],
  props: {
    initialValue: {
      type: [Object, String, Number],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    optionValueKey: {
      type: String,
      default: 'value'
    },
    optionLabelKey: {
      type: String,
      default: 'text'
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowEmpty: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    resetValueOnOptionsChange: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: false
    },
    allowAddOptions: {
      type: Boolean,
      default: false
    },
    clearWhenDisable: {
      type: Boolean,
      default: false
    },
    clearWhenOptionsChange: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    dataCyOption: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false,
      value: null,
      search: null
    }
  },

  computed: {
    componentClass () {
      return {
        'input-select--open': this.isOpen
      }
    },
    dataStateOptions () {
      return this.isOpen ? 'open' : 'closed'
    },
    /* Own computed properties */
    hasSelected () {
      return Boolean(this.value) || this.value === 0
    },
    placeholderMessage () {
      return (this.hasSelected || this.allowEmpty) ? null : this.placeholder
    },

    /* Overriden mixin methods */
    isValid () {
      if (this.disabled) {
        return true
      }

      return (!this.required || this.allowEmpty) || this.hasSelected
    },

    showClearButton () {
      return this.hasSelected && this.allowClear && !this.disabled
    },
    modificable () {
      return !this.readOnly && !this.disabled
    },
    valueIsEmpty () {
      return !this.value && this.value !== 0
    },
    allowEmptySelection () {
      return this.placeholder && this.allowEmpty
    },
    emptyOption () {
      return { value: null, label: this.placeholder, key: `empty_${this.name}` }
    },
    searchFilter () {
      return this.search?.trim() || ''
    },

    selectableOptions () {
      const selectableOptions = this.formatOptions()

      if (this.allowEmptySelection) {
        selectableOptions.unshift(this.emptyOption)
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

        return optionText.includes(searchText)
      })
    },
    optionSelected () {
      if (this.allowEmptySelection && this.valueIsEmpty) {
        return this.emptyOption
      } else if (this.valueIsEmpty) {
        return {}
      }

      const selected = this.selectableOptions.find(option => option.value.id === this.value.id)

      if (!selected && !this.value) {
        return {}
      }

      return selected || { value: this.value, label: this.value, key: this.value }
    },

    errorMessage () {
      if (!this.shouldShowErrors) {
        return
      }

      return this.$t('FORM.ERROR.NOT_EMPTY')
    },

    dropdownElements () {
      return {
        content: this.$refs.selectOptions,
        sibling: this.$refs.input
      }
    },
    searchHasResults () {
      return Boolean(this.filteredOptions?.length)
    }
  },
  watch: {
    disabled (newValue) {
      if (newValue && this.clearWhenDisable) {
        this.value = null
      }
    },
    options (newValue) {
      if (this.clearWhenOptionsChange) {
        if (newValue?.last()?.[this.optionLabelKey] === this.search) {
          this.value = this.search
        } else {
          this.value = null
        }
      }
    }
  },
  methods: {
    close () {
      this.isOpen = false
      this.search = null
    },
    formatOptions () {
      const formattedOptions = this.options.map(option => {
        const value = option[this.optionValueKey]
        const label = option[this.optionLabelKey]
        const key = this.getKeyFromValue(value)

        return { value, label, key }
      })

      if (this.resetValueOnOptionsChange) this.value = null

      return formattedOptions
    },
    /* Input mixin overrided methods */
    shouldSetInitialValue () {
      return Boolean(this.initialValue) || this.initialValue === 0
    },

    /* Own methods */
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

    toggle () {
      if (!this.modificable) {
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

    clear () {
      this.dirty = true
      this.value = null

      this.$emit('change', null)
    },

    select (value) {
      console.log('select', value)

      if (this.value === value) {
        this.close()

        return
      }

      this.dirty = true
      this.value = value

      this.$emit('change', this.value)

      this.close()
    },

    selectFirstResult () {
      if (!this.searchFilter || !this.filteredOptions?.length) {
        return
      }

      const firstResult = this.filteredOptions[0]

      this.select(firstResult.value)
    },

    addOption () {
      if (this.allowSearch) {
        this.value = this.search
        this.$emit('click', this.search)
      }
    }
  }
}
</script>

<style lang="scss">
.input-select {
  position: relative;

  &--open {
    .input-select__list-wrapper {
      .input-base__wrapper {
        border-color: $input-border-active;
      }

      .input-base__right-icon {
        color: $input-icon-active;
        padding-left: $space-2;
        padding-right: 0;
        transform: rotate(180deg);
      }
    }
  }

  &__list-wrapper {
    .input-base__input {
      cursor: pointer;
    }
  }

  &__label-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: $space-2;
  }

  // TODO delete this when refactor label (please, don´t erase this comment)
  &__label-text {
    @include text-overflow-ellipsis;
    color: $input-text;
    display: block;
    font-weight: $fw-semibold;
  }

  // TODO delete this when refactor label (please, don´t erase this comment)
  &__label-clear-button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    @include transition-height;
    color: $primary-color-100;
  }

  &__search-wrapper {
    display: flex;
    margin: $space-1;
  }

  &__search-bar {
    flex-grow: 1;
  }

  &__search-actions {
    align-self: center;
    margin-left: $space-2;
  }

  &__list {
    background-color: $input-background;
    border: 1px solid $input-border;
    border-radius: $input-border-radius;
    box-shadow: $box-shadow-3;
    left: 0;
    max-height: 232px;
    overflow: hidden auto;
    position: absolute;
    top: 100%;
    width: 100%;
    will-change: transform, opacity;
    z-index: 3;

    // TODO update this when refactor modals (please, don´t erase this comment)
    &--outside {
      z-index: 10000;
    }
  }

  &__list-item {
    cursor: pointer;
    padding: $space-2;
    transition: background-color .3s linear;

    &:hover {
      background-color: $input-background-hover;
    }

    &--selected {
      background-color: $input-background-hover;
    }

    &--no-result {
      &:hover {
        background-color: transparent;
      }
    }
  }

  &__error-message {
    @include transition-height;
    color: $input-text-error;
    display: block;
    font-size: $font-size-12;
    padding: $space-1 0 $space-1 $space-2;
  }
}
</style>
