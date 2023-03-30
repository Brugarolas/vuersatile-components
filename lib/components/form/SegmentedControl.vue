<template lang="pug">
.segmented-control
    .segmented-control__label-container(v-if="label || allowUnselected")
      label.segmented-control__label {{ label }}

      TransitionHeight(v-if="allowUnselected")
        button.segmented-control__clear-button(v-show="showClearButton", type="button", @click.prevent="clear") {{ $t('GENERIC.CLEAR') }}

    ul.segmented-control__options(:data-num-options="dataNumOptions")
      li.segmented-control__option-item(
        v-for="(option, index) in selectableOptions",
        :key="option.key",
        :class="{ 'segmented-control__option-item--selected': option === optionSelected }",
        :data-item="`${name}-${index}`"
      )
        button.segmented-control__option-button(type="button", @click.prevent="select(option.value)")
          span.segmented-control__option-text {{ option.label }}

    TransitionHeight
      .segmented-control__error(v-if="shouldShowErrors") {{ errorMessage }}
</template>

<script>
import { RequiredInputMixin } from './_internal'
import { TransitionHeight } from '@/components/transition'

export default {
  components: {
    TransitionHeight
  },
  mixins: [RequiredInputMixin],

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
    allowUnselected: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /* Own computed properties */
    hasSelected () {
      return Boolean(this.value) || this.value === 0
    },
    hasSelectableOptions () {
      return Boolean(this.selectableOptions?.length)
    },
    showClearButton () {
      return this.allowUnselected && this.hasSelected
    },
    dataNumOptions () {
      if (!this.hasSelectableOptions) {
        return 2
      }

      return Math.min(4, Math.max(2, this.selectableOptions.length))
    },

    /* Overriden mixin methods */
    isValid () {
      if (this.disabled) {
        return true
      }

      return (!this.required || this.allowEmpty) || this.hasSelected
    },

    /* Own computed properties */
    errorMessage () {
      if (!this.shouldShowErrors) {
        return
      }

      return this.$t('FORM.ERROR.NOT_EMPTY')
    },

    selectableOptions () {
      const selectableOptions = this.options.map(option => {
        const value = option[this.optionValueKey]
        const label = option[this.optionLabelKey]
        const key = this.getKeyFromValue(value)

        return { value, label, key }
      })

      return selectableOptions
    },
    optionSelected () {
      if (!this.hasSelected) {
        return this.allowUnselected || !this.hasSelectableOptions ? null : this.selectableOptions[0]
      }

      return this.selectableOptions.find(option => option.value === this.value)
    }
  },

  beforeMount () {
    if (!this.allowUnselected && !this.hasSelected && this.hasSelectableOptions) {
      this.value = this.selectableOptions[0].value
    }
  },

  methods: {
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

    select (value) {
      if (this.value === value) {
        return
      }

      this.dirty = true
      this.value = value

      this.$emit('change', this.value)
    },

    clear () {
      this.dirty = true
      this.value = null

      this.$emit('change', null)
    }
  }
}
</script>

<style lang="scss">
.segmented-control {
  display: block;

  @include media(sm) {
    display: inline-block;
  }

  &__label-container {
    display: flex;
    flex-direction: column;
    padding: 0 0 $space-2 0;

    @include media(sm) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__label {
    display: block;
    @include text-overflow-ellipsis;
    flex-shrink: 100;
  }

  &__clear-button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    color: $text-error-color;
    margin-top: $space-1;
    text-align: left;

    @include transition-height;

    @include media(sm) {
      margin-top: 0;
    }
  }

  &__options {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    border-radius: $modal-border-radius;
    padding: $space-1;
    background-color: $greyscale-color-10;
    width: 100%;
    height: 40px;

    @include media(sm) {
      width: auto;

      &[data-num-options="2"] .segmented-control__option-text {
        width: 148px;
        max-width: 148px;
      }

      &[data-num-options="3"] .segmented-control__option-text {
        width: 136px;
        max-width: 136px;
      }

      &[data-num-options="4"] .segmented-control__option-text {
        width: 124px;
        max-width: 124px;
      }
    }
  }

  &__option-item {
    margin-right: $space-1;

    @include media(xs) {
      flex: 1 1 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &--selected {
      .segmented-control__option-button {
        background-color: $primary-color-100;
        color: $text-negative-color;

        &:hover {
          background-color: $primary-color-100;
        }

        &:after {
          opacity: 1;
        }
      }
    }
  }

  &__option-button {
    @include button-reset-browser-tap-styles;
    align-items: center;
    border-radius: $button-border-radius;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: transparent;
    transition: color 0.25s ease, background-color 0.25s ease;

    @include media(sm) {
      width: auto;
    }

    &:after {
      border-radius: $button-border-radius;
      box-shadow: $box-shadow-2;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: opacity 0.25s ease;
      opacity: 0;
    }

    &:hover {
      background-color: $greyscale-color-30;
      color: $text-negative-color;

      &:after {
        opacity: 1;
      }
    }
  }

  &__option-text {
    font-size: $font-size-12;
    padding: $space-2;

    @include text-overflow-ellipsis;

    @include media(sm) {
      width: 124px;
      max-width: 124px;
    }
  }

  &__error {
    display: block;
    @include transition-height;
    font-size: $font-size-12;
    color: $error-color-100;
    padding: $space-1 0 $space-1 $space-2;
  }
}
</style>
