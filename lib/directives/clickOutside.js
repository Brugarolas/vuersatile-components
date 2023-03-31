export const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value();
            }
        };

        document.addEventListener('click', el.clickOutsideEvent);
    },

    unmounted: (el) => {
        document.removeEventListener('click', el.clickOutsideEvent);
    },
};

export default clickOutside;
