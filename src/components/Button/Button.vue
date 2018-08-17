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
button {
  border: 1px solid;
  border-radius: 3px;
  padding: 0.5em 1em;
  cursor: pointer;
}
button:hover {
  background-color: aquamarine;
}
button:focus {
  outline: none;
}
button:active {
  background-color: aqua;
}
</style>
