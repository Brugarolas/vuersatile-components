<template lang="pug">
.card(ref="card")
  .card__header(v-if="hasHeader")
    div
      h4.card__title(
        v-if="title")
        span.mr-xs-2 {{ title }}
        slot(name="label")
      h6.card__subtitle(v-if="subtitle") {{ subtitle }}

    .card__actions(v-if="hasAction")
      slot(name="actions")

  slot(name="no-body")

  .card__body(v-if="this.$slots.default")
    slot

</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, default: null },
    subtitle: { type: String, default: null }
  },
  computed: {
    hasAction () {
      return Boolean(this.$slots.actions)
    },
    hasHeader () {
      return this.hasAction || this.title || this.subtitle
    }
  }
}
</script>

<style lang="scss">
.card {
  background: $greyscale-color-0;
  color: $text-color;
  border-radius: 7px;
  box-shadow: $box-shadow-3;
  display: block;
  position: relative;
  transition: all .3s ease-in-out;
  width: 100%;

  &__header {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: $space-6 $space-6 0;

    &:only-child {
      padding-bottom: $space-6;
    }
  }

  &__title {
    display: flex;
    flex-wrap: wrap;
    font-weight: $fw-semibold;
  }

  &__subtitle {
    font-weight: $fw-semibold;
    margin-top: $space-3;
  }

  &__body {
    padding: $space-6;
  }
}
</style>
