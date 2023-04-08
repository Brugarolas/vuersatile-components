/* tslint:disable:import-spacing */
import VueSlider from './vue-slider.vue'
import VueSliderMark from './vue-slider-mark.vue'
import VueSliderDot from './vue-slider-dot.vue'
import { ERROR_TYPE } from './utils/control'
;(VueSlider as any).VueSliderMark = VueSliderMark
;(VueSlider as any).VueSliderDot = VueSliderDot

export default VueSlider
export { ERROR_TYPE, VueSliderMark, VueSliderDot }
// https://github.com/NightCatSama/vue-slider-component/tree/vue3 v4.1.0-beta.7
