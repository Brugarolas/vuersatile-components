<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# Layout & Grid

## Container class

If you need to contain your view or component into a container element (with it's own max-width) you have to use `.container` class.

We have the following max container widths for the following breakpoints:

- `xs`: 100%
- `sm`: 575px
- `md`: 767px
- `lg`: 1023px
- `xl`: 1200px

## Rows & Columns

You can make rows and cols using `.row` class and columns classes (e.g. `.col-12` or `.col-lg-6`).

It's important to mantain the rows and cols structure to avoid creating unnecessary spaces so you have to put the column classes inside the `.row` class.

```html
<div class="row">
    <div class="col-12">
        <div class="row">
            <div class="col-6"></div>
            <div class="col-6"></div>
        </div>
    </div>
</div>
```

Don't add padding or margin helpers or classes to `.row` or `.col-X` classes. If you need to add extra space, like padding or margin-left e.g, wrap your grid in a div that adds those classes you need.

```html
<div class="ml-xs-4">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6"></div>
            </div>
        </div>
    </div>
</div>
```

## Responsive grid

You can create different column sizes or grids depending on the [breakpoint](/scss/breakpoints). These responsive classes are mobile first, meaning it will apply in the selected breakpoint and above (bigger breakpoints).

```html
<div class="row">
    <div class="col-12 col-md-6 col-xl-4"></div>
</div>
```

## Offset and spacings

You can use `.offset-X` to create an space before your column.

```html
<div class="row">
    <div class="col-3 offset-2"></div>
    <div class="col-3 offset-2"></div>
</div>
```

Of course, these classes are also responsive.

```html
<div class="row">
    <div class="col-6 col-md-4 offset-md-1"></div>
    <div class="col-6 col-md-4 offset-md-2"></div>
</div>
```

## Ordering the columns

if you need to order your columns, you can use `.order-X` classes. Abd yes, you guessed right, these classes are also responsive.

```html
<div class="row">
    <div class="col-3 order-2"></div>
    <div class="col-3 order-md-3"></div>
    <div class="col-3 order-first"></div>
    <div class="col-3 order-last"></div>
</div>
```
