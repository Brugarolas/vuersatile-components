<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# Validations plugins

`Vuersatyle Components` has a validation plugin that is completely integrated widh [ValidationsInputMixin](/components/form/validations-input-mixin). In fact, it can"t exists each without other.

## Included validations

We have included the following validations:

```json
  "not-empty": { "errorMessage": "FORM.ERROR.NOT_EMPTY" },
  "date": { "errorMessage": "FORM.ERROR.NOT_DATE" },
  "email": { "errorMessage": "FORM.ERROR.EMAIL" },
  "number": { "errorMessage": "FORM.ERROR.NOT_NUMBER" },
  "int": { "errorMessage": "FORM.ERROR.NOT_INT" },
  "min-value": { "errorMessage": "FORM.ERROR.MIN_VALUE" },
  "max-value": { "errorMessage": "FORM.ERROR.MAX_VALUE" },
  "min-current-date": {"errorMessage": "FORM.ERROR.MIN_CURRENT_DATE" },
  "equal": { "errorMessage": "FORM.ERROR.NOT_EQUAL" },
  "is-time": { "errorMessage": "FORM.ERROR.NOT_VALID_TIME" },
  "max-length": { "errorMessage": "FORM.ERROR.NOT_MAX_LENGTH" },
  "min-length": { "errorMessage": "FORM.ERROR.NOT_MIN_LENGTH" }
```

<div class="mb-xs-8" />

## Including more validations

We can include more validations like this:

```js
app.config.$registerValidation('is-complex-password', { validate: isComplexPasswordFunc, errorMessage: 'FORM.ERROR.NOT_MIN_LENGTH' })
```

<div class="mb-xs-8" />
