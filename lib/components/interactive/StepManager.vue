<template lang="pug">
.step-manager
  .step-manager__steps
    template(v-for="(step, index) in steps", :key="index")
      .step-manager__step-item(:class="{ 'step-manager__step-item--visited': index < currentStep, 'step-manager__step-item--current': index === currentStep }")
        span.step-manager__number {{ index + 1 }}
        .step-manager__info
          p.step-manager__title {{ step.title }}
          p.step-manager__description {{ step.description }}
      Icon.step-manager__icon(v-if="index + 1 < steps.length", icon="ght")

  .step-manager__content(:data-step-selected="currentStep")
    TransitionGroupFade.step-manager__animation
      template(v-for="(step, index) in steps", :key="index")
        .step-manager__wrapper(v-if="index === currentStep")
          slot(:name="`step${index + 1}`")
</template>

<script>
import { Icon } from '@/components/info'
import { TransitionGroupFade } from '@/components/transition'

export default {
  components: {
    Icon,
    TransitionGroupFade
  },
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    currentStep: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.step-manager {
  &__steps {
    display: flex;
    padding: $space-2;

    @include media(md) {
      padding: $space-7;
    }
  }

  &__step-item {
    display: flex;

    &--current,
    &--visited {
      .step-manager__title,
      .step-manager__description {
        color: $greyscale-color-90;
      }
    }

    &--current .step-manager__number {
      background-color: $step-manager-active-bg-color;
      color: $text-negative-color;
    }

    &--visited .step-manager__number {
      background-color: $greyscale-color-70;
      color: $text-negative-color;
    }

    &--visited + .step-manager__icon {
      color: $greyscale-color-90;
    }
  }

  &__number {
    align-items: center;
    background-color: $greyscale-color-10;
    border-radius: 4px;
    color: $greyscale-color-30;
    display: flex;
    flex-shrink: 0;
    font-size: $font-size-18;
    height: 40px;
    justify-content: center;
    transition: background-color .25s ease;
    width: 40px;

    @include media(sm) {
      font-size: $font-size-14;
      height: 20px;
      margin-right: $space-3;
      width: 20px;
    }

    @include media(md) {
      font-size: $font-size-18;
      height: 40px;
      margin-right: $space-5;
      width: 40px;
    }
  }

  &__info {
    display: none;

    @include media(sm) {
      display: block;
    }
  }

  &__title {
    color: $greyscale-color-30;
    font-weight: $fw-semibold;
    margin-bottom: $space-2;
    transition: background-color .25s ease;
  }

  &__description {
    color: $greyscale-color-30;
    font-size: $font-size-12;
  }

  &__icon {
    align-items: center;
    display: flex;
    margin: 0 $space-4;
    transition: background-color .25s ease;

    @include media(md) {
      margin: 0 $space-8;
    }
  }

  &__content {
    margin-top: $space-2;
    padding: $space-2 0;
    position: relative;

    &:before {
      content: '';
      background-color: $greyscale-color-20;
      height: 1px;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  &__animation {
    position: relative;
  }
}
</style>
