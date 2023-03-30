<script setup>
import { Card } from '@/components/info'
import { Form, InputText } from '@/components/form';

const log = (formData) => {
  console.log(formData);
}
</script>

<template lang="pug">
main.pr-xs-6.pl-xs-6
  Card.mt-xs-6(title="Contact form")
    Form(@submit="log")
      .row
        .col-6.col-lg-4.col-xl-2
          InputText.mb-xs-2(
            name="email",
            label="E-mail",
            placeholder="Enter your e-mail...",
            icon="at",
            :validations="['not-empty', 'email']"
          )
</template>
