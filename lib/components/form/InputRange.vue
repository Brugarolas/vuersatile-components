<template lang="pug">
.input.input-range(:class="{ 'input-range--suffix': suffix, 'input-range--placeholder': showPlaceholder, 'input-range--dropdown': dropdownOpen }")
    .input-range__label-container(v-if="label || allowClear")
      label.input-range__label(v-if="label") {{ label }}
      TransitionHeight(v-if="allowClear")
        button.input-range__clear-button(v-show="showClearButton", type="button", @click.prevent="reset") {{ $t('GENERIC.CLEAR') }}
    .input-range__control(@click="openDropdown") {{ valueText }}

    TransitionSlide(:useAbsolutePosition="false")
      .input-range__dropdown(v-if="dropdownOpen", @click.stop)
        VueSlider(
          :modelValue="value",
          :min="min",
          :max="max",
          :interval="interval",
          :tooltip="tooltip",
          :minRange="minRange",
          :maxRange="maxRange",
          :order="true",
          :enableCross="false",
          :dragOnClick="true",
          :contained="true",
          :absorb="true",
          :dotSize="16",
          @drag-end="onDragEnd",
          @change="setValueModified"
        )

        .input-range__summary(v-if="multiple")
          span {{ $t('GENERIC.FROM') }}
          span.input-range__number {{ fromValue }}
          span.lowercase {{ $t('GENERIC.TO') }}
          span.input-range__number {{ toValue }}
</template>

<script>
import { TransitionSlide, TransitionHeight } from '@/components/transition'
import { RequiredInputMixin } from './_internal'
import VueSlider from './_internal/VueSlider/vue-slider.vue'
import './_internal/VueSlider/theme/default.scss'

export default {
  components: {
    TransitionSlide,
    TransitionHeight,
    VueSlider
  },
  mixins: [RequiredInputMixin],
  props: {
    initialValue: {
      type: [Number, Array],
      required: 0,
      default: null
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    interval: {
      type: Number,
      default: 1
    },
    multiple: {
      type: Boolean,
      default: true
    },
    minRange: {
      type: Number,
      default: undefined
    },
    maxRange: {
      type: Number,
      default: undefined
    },
    suffix: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowZero: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: 'always',
      validator: (value) => ['always', 'active', 'focus', 'hover', 'none'].includes(value)
    }
  },
  data () {
    return {
      value: 0,
      dropdownOpen: false,
      valueModified: false,
      showClearButton: false
    }
  },
  computed: {
    isValid () {
      if (this.disabled) {
        return true
      }

      if (!this.required || this.allowZero) {
        return true
      }

      if (this.multiple) {
        const [first, second] = this.value

        return first !== 0 || first !== second
      }

      return this.value !== 0
    },
    showPlaceholder () {
      if (this.valueModified || !this.placeholder) {
        return false
      }

      if (this.multiple) {
        const [first, second] = this.value

        return first === 0 && first === second
      }

      return this.value === 0
    },
    valueText () {
      if (this.showPlaceholder) {
        return this.placeholder
      }

      if (this.multiple) {
        const [first, second] = this.value

        return `${this.formatValueWithSuffix(first)} — ${this.formatValueWithSuffix(second)}`
      }

      return this.formatValueWithSuffix(this.value)
    },
    fromValue () {
      const from = this.value[0]

      return this.suffix ? `${from} ${this.suffix}` : from
    },
    toValue () {
      const to = this.value[1]

      return this.suffix ? `${to} ${this.suffix}` : to
    }
  },
  mounted () {
    if (!this.suffix) {
      return
    }

    this.$nextTick(() => {
      this.$el.style.setProperty('--suffix', `"${this.suffix}"`)
    })
  },
  methods: {
    // Own methods
    formatValueWithSuffix (value) {
      return this.suffix ? `${value} ${this.suffix}` : value
    },
    setValueModified (value) {
      this.valueModified = true
      this.showClearButton = true
      this.value = value
    },
    onDragEnd () {
      this.showClearButton = true
      this.$emit('change')
    },
    openDropdown () {
      if (!this.dropdownOpen) {
        this.dropdownOpen = true

        this.handleCloseEvents()
      }
    },

    // Handle "esc" key and click away methods to close dropdown
    closeOnClickAway (event) {
      if (event && event.target && !this.$el.contains(event.target)) {
        this.dropdownOpen = false

        this.handleCloseEvents()
      }
    },
    closeOnPressEscape (event) {
      if (event && event.keyCode === 27) {
        this.dropdownOpen = false

        this.handleCloseEvents()
      }
    },

    handleCloseEvents () {
      this.$nextTick(() => {
        if (this.dropdownOpen) {
          document.body.addEventListener('click', this.closeOnClickAway)
          document.addEventListener('keyup', this.closeOnPressEscape)
        } else {
          document.body.removeEventListener('click', this.closeOnClickAway)
          document.removeEventListener('keyup', this.closeOnPressEscape)
        }
      })
    },

    // Replaced RequiredInputMixin methods
    shouldSetInitialValue () {
      return true
    },
    formatInitialValue () {
      const hasInitialValue = Boolean(this.initialValue)

      // If it does not have an initial value, return 0 or min value if its higher than 0
      if (!hasInitialValue) {
        const minNumber = Math.max(0, this.min)

        // Return simple number or an array depending whether range is multiple or not
        return this.multiple ? [minNumber, minNumber] : minNumber
      }

      const initialValueIsArray = this.initialValue.length > 0

      // If initial value is an array, extract values from array and compare them to this.min and this.max
      if (initialValueIsArray) {
        const [firstInitial, secondInitial] = this.initialValue

        // Check if arrays positions exist and have a number
        const first = isNaN(firstInitial) ? Math.max(0, this.min) : Math.max(this.min, firstInitial)
        const second = isNaN(secondInitial) ? first : Math.min(this.max, secondInitial)

        // Return simple number or an array depending whether range is multiple or not
        return this.multiple ? [first, second] : first
      }

      // Make sure number is between this.max and this.min values
      const number = Math.min(this.max, Math.max(this.min, this.initialValue))

      // Return simple number or an array depending whether range is multiple or not
      return this.multiple ? [number, number] : number
    },

    reset () {
      this.value = this.multiple ? [0, 0] : 0
      this.valueModified = false
      this.dirty = false
      this.formIsDirty = false
      this.showClearButton = false

      this.$emit('change', null)
    }
  }
}
</script>

<style lang="scss">
.input-range {
  --suffix: '';
  display: block;
  position: relative;

  &__label {
    display: block;
    font-weight: $fw-semibold;
    @include text-overflow-ellipsis;
  }

  &__control {
    @include text-overflow-ellipsis;
    border: 1px solid $input-border;
    border-radius: $input-border-radius;
    cursor: pointer;
    height: 32px;
    padding: $space-2;
    position: relative;
    transition: border-color .3s ease, color .3s ease;

    &:before {
      border-radius: $input-border-radius;
      bottom: 0;
      box-shadow: $box-shadow-3;
      content: '';
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity .3s ease;
    }
  }

  &__dropdown {
    background-color: $input-background;
    border: 1px solid $input-border;
    border-radius: $input-border-radius;
    box-shadow: $box-shadow-3;
    left: 0;
    position: absolute;
    top: calc(100% + #{$space-2});
    padding: $space-15 $space-8 $space-8 $space-8;
    min-width: 384px;
    width: 100%;
    z-index: 2;
  }

  &__summary {
    padding-top: $space-9;
    text-align: center;
  }

  &__number {
    background-color: $greyscale-color-5;
    display: inline-block;
    font-weight: $fw-semibold;
    margin: 0 $space-2;
    min-width: 60px; // Prevent some unnecessary reflows on small numbers
    padding: $space-2 $space-4;
  }

  // Vue slider lib
  .vue-slider-rail {
    background-color: $primary-color-5;

    .vue-slider-process {
      background-color: $primary-color-100;
    }

    .vue-slider-dot .vue-slider-dot-handle {
      border: 1px solid $primary-color-100;
      box-shadow: $box-shadow-0;
      position: relative;
    }
  }

  .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner {
    background-color: $greyscale-color-5;
    border-color: $greyscale-color-5;
    color: $greyscale-color-90;
    font-size: $font-size-12;
    padding: $space-1 $space-2;
  }

  // If it has suffix
  &--suffix {
    .vue-slider-dot-tooltip .vue-slider-dot-tooltip-inner .vue-slider-dot-tooltip-text {
      &:after {
        content: var(--suffix);
        margin-left: $space-1;
      }
    }
  }

  // If it is open
  &--dropdown {
    .input-range__control {
      border-color: $input-border-active;

      &:before {
        opacity: 1;
      }
    }
  }

  // If it is showing placeholder
  &--placeholder {
    .input-range__control {
      color: $input-placeholder;
    }
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

  &__clear-button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    color: $text-link-color;
    margin-top: $space-1;
    text-align: left;

    @include transition-height;

    @include media(sm) {
      margin-top: 0;
    }
  }
}
</style>
