<template>
  <button v-on="$listeners" class="button"><slot></slot></button>
</template>

<script>
export default {
  name: 'BButton',
  props: {}
}
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid;
  border-radius: 3px;
  padding: 0.5em 1em;
  cursor: pointer;
}
.button:hover {
  background-color: aquamarine;
}
.button:focus {
  outline: none;
}
.button:active {
  background-color: aqua;
}

.button--sm {
  @extend .button;
  font-size: 0.5em;
}
.button--md {
  @extend .button;
  font-size: 1.5em;
}
.button--lg {
  @extend .button;
  font-size: 3em;
}

.error {
  .button {
    border-color: white;
    background-color: #e00000;
    color: white;
  }
  .button:hover {
    background-color: #ff0000;
  }
  .button:active {
    background-color: #d30000;
  }
}

.warn {
  .button {
    border-color: white;
    background-color: #dd7f04;
    color: white;
  }
  .button:hover {
    background-color: #e58304;
  }
  .button:active {
    background-color: #d87c04;
  }
}
</style>
