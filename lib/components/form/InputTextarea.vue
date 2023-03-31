<template lang="pug">
InputBase(
  :initialValue="initialValue",
  type="textarea",
  :classes="['input-textarea', allowResizeClass, autoResizeClass]",
  :name="name",
  :label="label",
  :icon="icon",
  :error="shouldShowErrors ? errorMessage : null",
  :placeholder="placeholder",
  :rows="currentRows",
  :disabled="disabled",
  @input="input",
  @change="change",
  @resize="doAutoResize"
)
</template>

<script>
import { InputBase } from './_internal'
import InputText from './InputText.vue'

export default {
  components: {
    InputBase
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
      default: 4
    }
  },

  data () {
    return {
      hasFocus: false,
      currentRows: 4
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

      const textareaElement = this.$el.querySelector('.input-base__input')

      this._doAutoResize(textareaElement)

      let skipNext = false
      const resizeObserver = new ResizeObserver(entries => {
        if (skipNext) {
          skipNext = false
          return
        }

        for (let entry of entries) {
          const contentRect = entry.contentRect;
          const parent = entry.target.parentElement;

          console.log('Element:', entry.target);
          console.log(`Element size: ${contentRect.width}px x ${contentRect.height}px`);
          console.log(`Element padding: ${contentRect.top}px ; ${contentRect.bottom}px`);
          console.log(`Element padding: ${contentRect.right}px ; ${contentRect.left}px`);

          // parent.style.width = `${Math.floor(contentRect.width) + 2}px`;
          parent.style.height = `${Math.floor(contentRect.height) + 2}px`;
          skipNext = true
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
    doAutoResize (event) {
      console.log(this.autoResize)
      console.log(event.target)
      console.log(event.target.parent)

      if (!this.autoResize) {
        return
      }

      this._doAutoResize(event.target)
    },

    _doAutoResize (element) {
      console.log(this.autoResize)
      console.log(element)
      console.log(element.parent)

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
    padding: $space-2;
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
      min-height: 128px;
      padding: $space-2;
      resize: vertical;
      white-space: normal;
    }
  }
}
</style>
