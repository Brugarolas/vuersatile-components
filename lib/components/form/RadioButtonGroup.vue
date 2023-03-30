<template lang="pug">
.radiobutton-group(:data-field-name="name")
  ul.radiobutton-group__list
    li.radiobutton-group__list-item(v-for="(radioButton, index) in inputValues", :key="index" :class="{ 'radiobutton-group__list-item--horizontal': horizontal }")
      RadioButton(
        :label="radioButton.label"
        :inputForm="radioButton.inputForm"
        :value="radioButton.value"
        :name="name"
        :checked="radioButton.value === radioButtonValue"
        :data-item="`${name}-${index}`"
        :disabled="radioButton.disabled"
        :error="error"
        :enableEmpty="enableEmpty"
        @change="change"
      )

  template
    TransitionHeight
      span.radiobutton-group__error(v-if="shouldShowErrors") {{ $t('generic.mandatoryLong') }}
</template>

<script>
import { RequiredInputMixin } from './_internal'
import { TransitionHeight } from '@/components/transition'
import RadioButton from './RadioButton.vue'

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
      radioButtonValue: this.initialValue || ''
    }
  },
  methods: {
    change (event) {
      this.dirty = true
      this.radioButtonValue = event
      this.$emit('change', this.radioButtonValue)
    },
    changeInput (event, item) {
      this.emit('changeInput', {
        value: event,
        item
      })
    }
  }
}
</script>

<style lang="scss">
.radiobutton-group {
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
