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

const HEIGHT_PER_ROW = 17
const BORDER_HEIGHT = 2

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
    await this.$nextTick()
    const textareaElement = this.$el.querySelector('.input-textarea-base__input')

    if (this.autoResize) {
      this._doInitialAutoResize(textareaElement)
    }

    if (this.allowResize) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const contentRect = entry.contentRect;
          const parent = entry.target.parentElement;

          requestAnimationFrame(() => {
            parent.style.height = `${Math.floor(contentRect.height) + BORDER_HEIGHT}px`;
          })
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

      this.doAutoResize(event)
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
      const parent = element.parentElement;
      const neededHeight = neededRows * HEIGHT_PER_ROW + BORDER_HEIGHT

      requestAnimationFrame(() => {
        this.currentRows = Math.max(this.rows, neededRows)
        parent.style.height = `${neededHeight}px`;
      })
    },

    _doInitialAutoResize (element) {
      const parent = element.parentElement
      const neededHeight = this.rows * HEIGHT_PER_ROW + BORDER_HEIGHT

      requestAnimationFrame(() => {
        parent.style.height = `${neededHeight}px`;
      })
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
  .input-textarea-base__input {
    resize: vertical;
    white-space: pre-wrap;
  }

  &--no-resize {
    .input-textarea-base__input {
      resize: none;
    }
  }

  &--autoresize {
    .input-textarea-base__input {
      overflow: hidden;
      resize: none;
    }
  }

  &.input-base {
    .input-textarea-base__wrapper {
      display: block;
      height: auto;
      overflow: auto;
    }

    .input-textarea-base__input {
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
