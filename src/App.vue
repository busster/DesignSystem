<template>
  <div id="app">
    <div class="warn">
      <b-button @click="debug" class="button--md">Default</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    debug () {
      debugger
    }
  }
}
</script>

<style lang="scss">
</style>
