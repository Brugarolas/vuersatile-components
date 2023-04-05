<script setup>
import Card from '../../lib/components/info/Card.vue'
</script>

<style lang="scss">
@import "@/scss/custom/base-theme/utilities/_colors.scss";
@import "@/scss/custom/base-theme/utilities/_displays.scss";
@import "@/scss/custom/base-theme/utilities/_miscellaneous.scss";
@import "@/scss/custom/base-theme/utilities/_typography.scss";
@import "@/scss/custom/base-theme/utilities/_grid.scss";

.col-3 {
    margin: 1rem;
    height: 80px;
    border-radius: 8px;
    background-color: $red-color-30;
}
</style>

# Miscellaneous

## Support colors

Besides [general colors](/scss/colors) we have some helpers:

<div class="color-error">Error color</div>
<div class="color-success">Sucess color</div>
<div class="color-warning">Warning collor</div>
<div class="color-info">Info color</div>

```html
<div class="color-error"></div>
<div class="color-success"></div>
<div class="color-warning"></div>
<div class="color-info"></div>
```

## Displays

We have some classes to help us with displays:

```css
.hidden {
  display: none;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
```

## Sizes

```css
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.max-width-100 {
  max-width: 100px;
}
.max-width-200 {
  max-width: 200px;
}
.max-width-400 {
  max-width: 400px;
}
```

## Miscellaneous

```css
.cursor-pointer {
  cursor: pointer;
}
.separator {
  background-color: $greyscale-color-20;
  display: block;
  height: 1px;
  width: 100%;
}
```

## Box shadows

<Card>
    <div class="row" style="justify-content: center;">
        <div class="col-3 box-shadow-0"></div>
        <div class="col-3 box-shadow-1"></div>
        <div class="col-3 box-shadow-2"></div>
        <div class="col-3 box-shadow-3"></div>
        <div class="col-3 box-shadow-4"></div>
        <div class="col-3 box-shadow-5"></div>
        <div class="col-3 box-shadow-6"></div>
        <div class="col-3 box-shadow-7"></div>
        <div class="col-3 box-shadow-8"></div>
    </div>
</Card>

```css
.box-shadox-0: 0 0 0 0;
.box-shadow-1: 0 0.125rem 0.5rem rgba(#262626, 0.1);
.box-shadow-2: 0 0.125rem 0.5rem rgba(#262626, 0.2);
.box-shadow-3: 0 0.125rem 0.5rem rgba(#262626, 0.3);
.box-shadow-4: 0 0.125rem 0.5rem rgba(#262626, 0.4);
.box-shadow-5: 0 0.125rem 0.5rem rgba(#262626, 0.5);
.box-shadow: 0 0.25rem 0.75rem rgba(#262626, 0.6);
.box-shadow: 0 0.25rem 0.75rem rgba(#262626, 0.7);
.box-shadow: 0 0.375rem 1rem rgba(#262626, 0.76);
```

## Typography

```css
.fw-light {
  font-weight: 300;
}
.fw-regular {
  font-weight: 400;
}
.fw-semibold {
  font-weight: 600;
}
.fw-bold {
  font-weight: 700;
}

.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}

.line-height-small {
  line-height: 1;
}
.line-height-normal {
  line-height: 1.2;
}
.line-height-big {
  line-height: 1.5;
}
```
