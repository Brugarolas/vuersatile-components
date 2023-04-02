<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# Breakpoints

We have the following breakpoints:

- `xs`: breakpoint for small smartphone devices (from 0px to 575px).
- `sm`: breakpoint for big smartphone devices (from 576px to 767px).
- `md`: breakpoint for tablet devices (from 768px to 1023px).
- `lg`: breakpoint for small screens (from 1024px to 1439px).
- `xl`: breakpoint for big screens (from 1440px onwards).

## Responsive mixin

We have also a mobile-first responsive mixin for easy to use media queries, meaning it will apply in the selected breakpoint and above (bigger breakpoints).

```scss
// all
@include media(xs) {
    property: value;
}

// sm and above
@include media(sm) {
    property: value;
}

// md and above
@include media(md) {
    property: value;
}

// lg and above
@include media(lg) {
    property: value;
}

// xl
@include media(xl) {
    property: value;
}
```
