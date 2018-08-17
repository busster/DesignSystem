<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
