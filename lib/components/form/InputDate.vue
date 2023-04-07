<template lang="pug">
.input-date
    InputCalendarBase(
        :label="label",
        :position="position",
        :lang="lang",
        :placeholder="placeholder",
        :error="shouldShowErrors",
        @input="input"
    )

    TransitionHeight
        span.input-date__error(v-if="shouldShowErrors") {{ $t('FORM.ERROR.MANDATORY_LONG') }}
</template>

<script>
import { InputCalendarBase, RequiredInputMixin } from './_internal';
import { TransitionHeight } from '@/components/transition'

export default {
    components: {
        InputCalendarBase,
        TransitionHeight
    },

    mixins: [RequiredInputMixin],

    props: {
        position: {
            type: String,
            default: 'center'
        },
        lang: {
            type: String,
            default: 'en'
        },
        placeholder: {
            type: String,
            default: null
        }
    },

    methods: {
        input (newValue) {
            this.dirty = true
            this.value = newValue
            this.$emit('input', newValue)
        }
    }
}
</script>

<style lang="scss">
.input-date {
    &__error {
        display: block;
        @include transition-height;
        font-size: $font-size-12;
        color: $error-color-100;
        padding: $space-1 0 $space-1 $space-2;
    }
}
</style>