<template lang="pug">
.input-base-calendar(:class="[errorClass]")
    label.input-base-calendar__label(v-if="label") {{ label }}

    Datepicker(
        inputClass="input-base-calendar__input",
        :position="position",
        :lang="lang",
        :placeholder="placeholder",
        :range="range",
        circle,
        @update:modelValue="input"
    )
</template>

<script>
// https://edisdev.github.io/vue-datepicker-ui/using.html
import 'vue3-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue3-datepicker-ui';

export default {
    components: {
        Datepicker: VueDatepickerUi
    },

    props: {
        position: {
            type: String,
            default: 'center'
        },
        lang: {
            type: String,
            default: 'en'
        },
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        error: {
            type: Boolean,
            default: false
        },
        range: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        errorClass () {
            return this.error ? 'input-base-calendar--error' : ''
        }
    },

    methods: {
        input (event) {
            this.$emit('input', event)
        }
    }
}
</script>

<style lang="scss">
.input-base-calendar {
    &__label {
        @include text-overflow-ellipsis;
        color: $input-text;
        display: block;
        font-weight: $fw-semibold;
        margin-bottom: $space-2;
    }

    .v-calendar {
        width: 100%;

        .input-field {
            .input-base-calendar__input {
                padding: 0 $space-2;
                border: 1px solid $input-border;
                border-radius: $input-border-radius;
                display: flex;
                height: 32px;
                width: 100%;
                color: $greyscale-color-90;
                transition: border-color 0.3s ease;

                &::placeholder {
                    color: $input-placeholder;
                }
            }

            .datepicker {
                left: initial;
                right: 8px;
                width: 16px;
                color: $input-icon;
                fill: $input-icon;
                cursor: pointer;
                transition: color 0.3s ease, fill 0.3s ease;
            }
        }

        &.v-calendar--show-picker {
            .input-field {
                .input-base-calendar__input {
                    border-color: $input-border-active;
                }

                .datepicker {
                    color: $input-icon-active;
                    fill: $input-icon-active;
                }
            }
        }

        .content {
            box-shadow: 2px 1px 20px 4px $greyscale-color-70;
            border-radius: $input-border-radius;

            .calendar {
                border-radius: $input-border-radius;
                overflow: hidden;
            }
        }

        &.center .calendar:first-child::before {
            border-width: 15px;
            top: -28px;
            border-color: transparent transparent $text-negative-color transparent;
        }
    }

    &.input-base-calendar--error {
        .v-calendar {
            .input-field {
                .input-base-calendar__input {
                    border-color: $input-border-error;
                }

                .datepicker {
                    color: $input-icon-error;
                    fill: $input-icon-error;
                }
            }
        }
    }
}
</style>