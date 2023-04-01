<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# BasicInputMixin

`BasicInputMixin` provides configurable properties, internal data properties, computed properties, methods and hooks to ease the burden of creating new input components.

It contains also the mechanism to connect to its parent [`Form`](/components/form/form), so it binds its validation to it and provides the [`Form`](/components/form/form) with the data to build submit object.

<div class="mb-xs-8" />

## Props

- `name`: name of the component. Type `String`, required `true`.
- `label`: label of the component. Type `String`.
- `initialValue`: initial value that the component will have. Type `[Object, String, Number, Boolean]`.
- `disabled`: wether the component will be disabled or not. Type `Boolean`, default `false`.
- `useForm`: connect to its parent [`Form`](/components/form/form) or not. Type `Boolean`, default `true`.

<div class="mb-xs-8" />
