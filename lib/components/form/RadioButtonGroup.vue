<template lang="pug">
.radiobutton-group(:data-field-name="name")
  .radiobutton-group__label(v-if="label") {{ label }}

  ul.radiobutton-group__list
    li.radiobutton-group__list-item(v-for="(radioButton, index) in inputValues", :key="index" :class="{ 'radiobutton-group__list-item--horizontal': horizontal }")
      RadioButton(
        :value="radioButton.value",
        :label="radioButton.label",
        :inputForm="radioButton.inputForm",
        :name="name",
        :checked="radioButton.value === value",
        :data-item="`${name}-${index}`",
        :disabled="radioButton.disabled",
        :error="error",
        :enableEmpty="enableEmpty",
        @input="input",
        @change="change"
      )

  TransitionHeight
    span.radiobutton-group__error(v-if="shouldShowErrors") {{ $t('generic.mandatoryLong') }}
</template>

<script>
import { RadioButton, RequiredInputMixin } from './_internal'
import { TransitionHeight } from '@/components/transition'

export default {
  components: {
    TransitionHeight,
    RadioButton
  },
  mixins: [RequiredInputMixin],
  props: {
    initialValue: {
      type: [String, Boolean],
      default: null
    },
    description: {
      type: String,
      default: null
    },
    inputValues: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      default: '',
      require: true
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    enableEmpty: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: this.initialValue || ''
    }
  },
  methods: {
    change (event) {
      this.dirty = true
      this.value = event.target.value
      this.$emit('change', this.value)
    },
    input (event) {
      this.dirty = true
      this.value = event.target.value
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss">
.radiobutton-group {
  &__label {
    @include text-overflow-ellipsis;
    color: $input-text;
    display: block;
    font-weight: $fw-semibold;
    margin-bottom: $space-2;
    transition: color 0.3s ease;
  }

  &__list-item {
    & + & {
      margin-top: $space-2;
    }

    &--horizontal {
      display: inline-flex;

      & + & {
        @include media(md) {
          margin-left: $space-4;
          margin-top: 0;
        }
      }
    }
  }

  &__error {
    @include transition-height;
    color: $input-text-error;
    display: block;
    font-size: $font-size-12;
  }
}
</style>
