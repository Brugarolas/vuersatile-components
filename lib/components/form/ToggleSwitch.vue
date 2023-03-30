<template lang="pug">
.toggle-switch(:data-field-name="name", :class="{ 'toggle-switch--invalid': shouldShowErrors, 'toggle-switch--empty-label': !label }")
    .toggle-switch__label(v-if="label") {{ label }}
    .toggle-switch__wrapper
      .toggle-switch__text-off(v-if="showYesNo") {{ $t('GENERIC.NO') }}
      input.toggle-switch__input(:id="fieldId", type="checkbox", v-model="value", @change="onChange")
      label.toggle-switch__toggle(:for="fieldId")
      .toggle-switch__text-on(v-if="showYesNo") {{ $t('GENERIC.YES') }}
</template>

<script>
import { nanoid } from 'nanoid/non-secure'
import { RequiredInputMixin } from './_internal'

export default {
  mixins: [RequiredInputMixin],
  props: {
    initialValue: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    showYesNo: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: false,
      internalId: nanoid()
    }
  },
  computed: {
    fieldId () {
      return `${this.name}_${this.internalId}`
    }
  },
  methods: {
    onChange () {
      this.dirty = true

      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="scss">
.toggle-switch {
  &--invalid {
    .toggle-switch__label {
      color: $error-color-100;
    }

    &.toggle-switch--empty-label .toggle-switch__text-off,
    &.toggle-switch--empty-label .toggle-switch__text-on {
      color: $error-color-100;
    }
  }

  &__label {
    margin-bottom: $space-2;
    transition: color 0.3s ease;
  }

  &__wrapper {
    align-items: center;
    display: flex;
  }

  &__text-off,
  &__text-on {
    transition: color 0.3s ease;
  }

  &__text-off {
    padding-right: $space-2;
  }

  &__text-on {
    padding-left: $space-2;
  }

  &__input {
    display: none;

    &:checked ~ .toggle-switch__toggle {
      background-color: $primary-color-100;

      &:before {
        left: calc(50% + 3px);
      }
    }
  }

  &__toggle {
    background: $greyscale-color-20;
    border-radius: rem(16);
    cursor: pointer;
    height: 24px;
    position: relative;
    transition: all 0.2s ease;
    width: 48px;

    &:before {
      background-color: $greyscale-color-0;
      border-radius: 100%;
      content: '';
      display: block;
      height: 18px;
      left: 3px;
      position: absolute;
      top: 3px;
      transition: all 0.2s ease;
      width: 18px;
    }
  }
}
</style>
