const getRAF = () =>
  window?.requestAnimationFrame ||
  window?.mozRequestAnimationFrame ||
  window?.webkitRequestAnimationFrame ||
  window?.msRequestAnimationFrame ||
  window?.setTimeout

const PADDING_BUTTOM = 20

export default {
  props: {
    mountOptionsOutside: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      parentId: 'dropdown-container',
      parentOptions: {},
      dropdownStyle: { width: '100%' }
    }
  },

  computed: {
    parentElement () {
      if (!this.parentId) {
        return document.body
      }

      return document.querySelector(`#${this.parentId}`) || this._createParentElement(this.parentId, this.parentOptions)
    },

    dropdownElements () {
      return {}
    }
  },

  async mounted () {
    await this.$nextTick()

    this.dropdownStyle = this._calculateCoords()
  },

  beforeUnmount () {
    this.unmountElement()
  },

  methods: {
    mountElement () {
      const { content, sibling } = this.dropdownElements

      if (!content || !sibling) {
        return
      }

      this.dropdownStyle = this._calculateCoords(content.$el || content, sibling.$el || sibling)

      this._nextTickFrame(() => {
        this._insertAtParent(content)
      })
    },

    unmountElement () {
      const { content } = this.dropdownElements

      if (!content) {
        return
      }

      const requestAnimationFrame = getRAF()

      requestAnimationFrame(() => {
        this._removeFromParent(content)
      })
    },

    _calculateCoords (content, siblingElement) {
      if (!siblingElement || !content) {
        return
      }

      const scrollTop = window?.pageYOffset || document?.documentElement?.scrollTop

      const siblingCoords = siblingElement.getBoundingClientRect()
      siblingCoords.clientHeight = siblingElement.clientHeight
      siblingCoords.offsetWidth = siblingElement.offsetWidth

      const contentCoords = content.getBoundingClientRect()
      contentCoords.offsetHeight = content.offsetHeight
      contentCoords.offsetWidth = content.offsetWidth

      let top = 0
      let left = 0
      let right = 0
      let width = 200

      const contentHeight = siblingCoords.bottom + contentCoords.offsetHeight + PADDING_BUTTOM

      if (contentHeight >= window?.innerHeight) {
        top = siblingCoords.bottom + siblingCoords.clientHeight + scrollTop - contentCoords.offsetHeight
      } else {
        top = siblingCoords.bottom + scrollTop
      }

      left = siblingCoords.left
      right = siblingCoords.right
      width = siblingCoords.offsetWidth

      console.log({
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        width: `${width}px`
      })

      return {
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        width: `${width}px`
      }
    },

    _insertAtParent (element) {
      this.parentElement.appendChild(element)
    },

    _removeFromParent (element) {
      if (this.parentElement && element && element.parentNode === this.parentElement) {
        this.parentElement.removeChild(element)
      }
    },

    _createParentElement (id, options = {}) {
      const parent = document.createElement('div')

      parent.id = id

      if (options?.classes) {
        document.body.classList.add(options?.classes)
      }

      document.body.appendChild(parent)

      return parent
    },

    _nextTickFrame (func) {
      this.$nextTick(() => {
        const requestAnimationFrame = getRAF()
        
        requestAnimationFrame(func)
      })
    }
  }
}
