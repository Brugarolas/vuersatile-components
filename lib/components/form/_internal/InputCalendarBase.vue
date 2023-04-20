<template lang="pug">
.input-base-calendar(:class="[errorClass]")
    label.input-base-calendar__label(v-if="label") {{ label }}

    Datepicker(
        inputClass="input-base-calendar__input",
        :position="position",
        :lang="lang",
        :placeholder="placeholder",
        :range="range",
        :initialValue="initialValue",
        :initialValueEnd="initialValueEnd",
        circle,
        @update:modelValue="input"
    )
</template>

<script>
import Datepicker from './Datepicker/Datepicker.vue'

export default {
    components: {
        Datepicker
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
        },
        initialValue: {
            type: [String, Date],
            required: false
        },
        initialValueEnd: {
            type: [String, Date],
            required: false
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
            min-width: auto;

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
            display: flex;
            flex-direction: column;

            @include media(md) {
                flex-direction: row;
            }

            .calendar {
                border-radius: $input-border-radius;
                overflow: hidden;
                width: 100%;
                max-height: 250px;

                @include media(md) {
                    width: auto;
                    min-width: 286px;
                }

                .viewmode {
                    display: flex;
                    justify-content: center;
                }
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
