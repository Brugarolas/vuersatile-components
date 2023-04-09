<script setup>
import ToggleSwitch from '../../../lib/components/form/ToggleSwitch.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# ToggleSwitch

Component `ToggleSwitch`, similar to [Checkbox](/components/form/checkbox). It manages binary states.

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

<Card>
  <ToggleSwitch name="newsletter" label="Send me weekly" />
</Card>

```html
<Card>
  <ToggleSwitch name="newsletter" label="Send me weekly" />
</Card>
```

<div class="mb-xs-8" />

## Props

- `showYesNo` (default `false`): Show Yes and No labels next to toggle.

<Card>
  <ToggleSwitch name="newsletter" label="Send me weekly" showYesNo />
</Card>

```html
<Card>
  <ToggleSwitch name="newsletter" label="Send me weekly" showYesNo />
</Card>
```

<div class="mb-xs-8" />
