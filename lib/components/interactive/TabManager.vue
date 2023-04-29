<template lang="pug">
.tab-manager(v-if="hasTabs")
  ul.tab-manager__nav
    li.tab-manager__item(
      v-for="(tab, index) in tabs",
      :key="tab.name",
      :data-tab-name="tab.name",
      :class="{ 'tab-manager__item--active': index === activeTab }"
      @click="selectTab(index)")
      | {{ tab.description }}

  .tab-manager__wrapper(:data-tab-selected="selectedTabDataName")
    TransitionGroupSlide(:direction="animationDirection")
      template(v-for="tab in tabs", :key="tab.name")
        .tab-manager__content(v-show="tab.name === selectedTabName", :data-tab-name="tab.name")
          slot(:name="tab.name")
</template>

<script>
import { TransitionGroupSlide } from '@/components/transition'

export default {
  components: {
    TransitionGroupSlide
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    defaultActive: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activeTab: 0,
      animationDirection: 'right'
    }
  },
  computed: {
    hasTabs () {
      return this.tabs && this.tabs.length > 0
    },
    selectedTab () {
      return this.tabs[this.activeTab] || {}
    },
    selectedTabName () {
      return this.selectedTab.name || 'invalid'
    },
    selectedTabDataName () {
      return `tab-${this.selectedTabName}`
    }
  },
  created () {
    if (this.defaultActive && this.defaultActive !== this.activeTab) {
      this.activeTab = this.defaultActive
    }
  },
  methods: {
    selectTab (index) {
      if (this.activeTab === index) return

      this.animationDirection = this.activeTab > index ? 'left' : 'right'

      this.activeTab = index

      this.$emit('change-tab', { index, tab: this.selectedTab.name })
    }
  }
}
</script>

<style lang="scss">
.tab-manager {
  overflow: hidden;

  &__nav {
    box-shadow: $box-shadow-1-bottom;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    @include button-reset-browser-tap-styles;
    cursor: pointer;
    display: block;
    padding: $space-2 $space-3;
    position: relative;
    transition: all .25s ease;

    &:after {
      background: $primary-color-100;
      content: '';
      bottom: -2px;
      display: block;
      height: 2px;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: opacity .25s ease;
      width: 100%;
    }

    &:hover {
      color: $primary-color-100;
    }

    &.tab-manager__item--active {
      color: $primary-color-100;

      &:after {
        opacity: 1;
      }
    }
  }

  &__wrapper {
    overflow: hidden;
    position: relative;
  }

  &__content {
    padding: $space-6 $space-2 $space-6 $space-2;
  }
}
</style>
