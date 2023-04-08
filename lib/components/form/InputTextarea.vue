<template lang="pug">
TextareaBase.input-textarea(
  :value="value"
  :class="[allowResizeClass, autoResizeClass]",
  :name="name",
  :label="label",
  :icon="icon",
  :error="realError",
  :placeholder="placeholder",
  :rows="currentRows",
  :disabled="disabled",
  @input="input",
  @change="change",
  @resize="doAutoResize"
)
</template>

<script>
import { TextareaBase } from './_internal'
import InputText from './InputText.vue'

export default {
  components: {
    TextareaBase
  },
  mixins: [InputText],

  props: {
    allowResize: {
      type: Boolean,
      default: false
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      hasFocus: false,
      currentRows: 2
    }
  },

  created () {
    if (this.rows) {
      this.currentRows = this.rows
    }
  },

  async mounted () {
    if (this.autoResize) {
      await this.$nextTick()

      const textareaElement = this.$el.querySelector('.input-textarea-base__input')

      this._doAutoResize(textareaElement)

      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const contentRect = entry.contentRect;
          const parent = entry.target.parentElement;

          parent.style.height = `${Math.floor(contentRect.height) + 2}px`;
        }
      })

      resizeObserver.observe(textareaElement)
    }
  },

  computed: {
    allowResizeClass () {
      return !this.allowResize ? 'input-textarea--no-resize' : ''
    },

    autoResizeClass () {
      return this.autoResize ? 'input-textarea--autoresize' : ''
    }
  },

  methods: {
    resetValue () {
      return ''
    },

    input (event) {
      this.value = this.formatInput(event.target.value)

      this.$emit('input', event.target.value)

      this.validate()
    },

    doAutoResize (event) {
      if (!this.autoResize) {
        return
      }

      this._doAutoResize(event.target)
    },

    _doAutoResize (element) {
      if (!element) {
        return
      }

      const computedStyles = this._getComputedStyles(element)
      const neededRows = Math.round((element.scrollHeight - computedStyles.paddingVertical) / computedStyles.lineHeight)

      this.currentRows = Math.max(this.rows, neededRows)
    },

    _getComputedStyles (element) {
      if (!element.computedStyles) {
        const computedStyles = window.getComputedStyle(element)

        element.computedStyles = {
          lineHeight: Number(computedStyles['line-height'].replace('px', '')),
          paddingVertical: Number(computedStyles['padding-top'].replace('px', '')) + Number(computedStyles['padding-bottom'].replace('px', ''))
        }
      }

      return element.computedStyles
    }
  }
}
</script>

<style lang="scss">
.input-textarea {
  .input-base__input {
    resize: vertical;
  }

  &--no-resize {
    .input-base__input {
      resize: none;
    }
  }

  &--autoresize {
    .input-base__input {
      overflow: hidden;
      resize: none;
    }
  }

  &.input-base {
    .input-base__wrapper {
      display: block;
      height: auto;
      overflow: auto;
    }

    .input-base__input {
      display: flex;
      min-height: 64px;
      padding: 0 $space-2;
      resize: vertical;
      white-space: normal;

      &::placeholder {
        margin-top: $space-2;
      }
    }
  }
}
</style>
