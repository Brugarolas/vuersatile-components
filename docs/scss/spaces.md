# Spacings

## Responsive spacings

Responsive margin helpers. Loop through the [breakpoint](/scss/breakpoints) values. You can use different values for margin in each breackpoint. You need to specify the breakpoint when you use theses classes. These responsive classes are mobile first, meaning it will apply in the selected breakpoint and above (bigger breakpoints).

To use these classes, first we specify with an `.m` or an `.p` if its a margin or a padding; after if it's right, left, top, or bottom with a `r`, `l`, `t`, `b` or nothing if it's for all; then the breakpoint like for example `-xs`; and finally the space size with an `-1`, `-2`. `-3`, `-4`, etc, each one accounts for `0.125rem`.

Let's see some examples:

```html
<div>
    <div class="m-xs-3"></div>
    <div class="mt-sm-3"></div>
    <div class="mr-md-3"></div>
    <div class="mb-lg-3"></div>
    <div class="ml-xl-3"></div>
    <div class="mt-sm-4 mt-lg-8"></div>
</div>
```

## Extra classes

We have some extra classes to help us with some edge cases:

```css
.mx-auto {
  margin-right: auto;
  margin-left: auto;
}
.mr-auto {
  margin-right: auto;
}
.ml-auto {
  margin-left: auto;
}

.px-auto {
  padding-right: auto;
  padding-left: auto;
}
.pr-auto {
  padding-right: auto;
}
.pl-auto {
  padding-left: auto;
}
```
