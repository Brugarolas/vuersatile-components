export default {
  methods: {
    /**
    * Wraps a function which group multiple sequential calls in a single one
    *
    * @param {function} func - Function to wrap
    * @param {number} delay - Time to wait for next call before executing
    * @return {function} Wrapped function which group calls
    */
    debounce (func, delay = 50) {
      let debounceTimer

      return function () {
        return new Promise((resolve, reject) => {
          const context = this
          const args = arguments

          clearTimeout(debounceTimer)
          debounceTimer = setTimeout(async () => {
            try {
              const result = await func.apply(context, args)
              resolve(result)
            } catch (err) {
              reject(err)
            }
          }, delay)
        })
      }
    },

    /**
    * Wraps a function and only allow to execute it once
    *
    * @param {function} func - Function to wrap
    * @return {function} Wrapped function which only allows one execution
    */
    once (func) {
      let isCalled = false

      return function () {
        if (isCalled) {
          return
        }

        isCalled = true
        const context = this
        const args = arguments

        func.apply(context, args)
      }
    }
  }
}
