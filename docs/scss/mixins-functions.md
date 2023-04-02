<script setup>
import Card from '../../lib/components/info/Card.vue'
</script>

<style lang="scss">
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}

@import "@/scss/custom/base-theme/utilities/_colors.scss";

.longshadow-card {
    overflow: hidden;
    text-align: center;
}
.longshadow-h1 {
    text-shadow: longshadow(darken($orange-color-100, 6%));
    font-size: 54px;
    font-weight: 700;
}

.triangle {
    @include triangle(16px, $greyscale-color-10, left);
}
</style>

# Mixins & Functions

## Functions

- **REM function**. Transform PX to REM.

```scss
font-size: rem(12);
```

<div class="mb-xs-8" />

- **Longshadow**. Creates a long shadow given a specific color.

<Card class="longshadow-card background-orange-color-100">
    <h1 class="longshadow-h1">Long Shadows</h1>
</Card>

```scss
text-shadow: longshadow($orange-color-100);
```

<div class="mb-xs-8" />

## Mixins

- **Responsive Ratio**. We use this for creating scalable elements (usually images or background images) that should maintain a specific ratio.

```scss
img {
    @include responsive-ratio(16, 9);
}
```

<div class="mb-xs-8" />

- **Triangle**. This mixin takes all the hassle out of creating that triangle you'll see coming out of most traditional tooltips, all without images, you just specify it's colour, how big you want it, the direction it's going to come out of your element and you're done.

<div class="triangle" />

```scss
div {
    @include triangle(16px, $greyscale-color-10, left);
}
```

<div class="mb-xs-8" />

- **Hardware acceleration**. Simple and effective trick for when you need to trigger hardware acceleration for some animation, keeping everything fast, slick and flicker-free. Use it with `will-change` for bests results.

```scss
div {
    @include hardware-acceleration;
}
```

<div class="mb-xs-8" />

- **Fluid typography**. This mixin lets you achieve a concept commonly known as fluid-type, the concept is to linearly increase (or decrease) font-size between 2 breakpoints.

```scss
.example {
    @fluid-typography(16px, 24px, 320px, 1200px)
}
```

That would scale `font-size` from a minimum of 16px (at a 320px viewport) to a maximum of 24px (at a 1200px viewport).

<div class="mb-xs-8" />

- **Fluid properties**. This mixin is the same as the previous but it lets you increase any property, not just font-size.

```scss
.example {
    @fluid-properties(16px, 24px, 320px, 1200px, padding-left, padding-right)
}
```

That would scale `padding-left` and `padding-right` from a minimum of 16px (at a 320px viewport) to a maximum of 24px (at a 1200px viewport).

<div class="mb-xs-8" />

- **Text overflow ellipsis**. Remember, you need to provide a `max-width`.

```scss
@include text-overflow-ellipsis;
```

<div class="mb-xs-8" />

- **Transition height**. Makes a transition height and smooth it.

```scss
@include transition-height;
```

<div class="mb-xs-8" />

- **Button reset browser tap styles on mobile**. Disables the blue tingling when clicking something on mobile.

```scss
@include button-reset-browser-tap-styles;
```

<div class="mb-xs-8" />

- **Button reset styles**. Reset browser button styles.

```scss
@include button-reset-styles;
```

<div class="mb-xs-8" />

- **Disable user select**. Disables text selection/highlighting of an element.

```scss
@include disable-user-select;
```

<div class="mb-xs-8" />
