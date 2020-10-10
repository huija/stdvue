<template>
  <h2 class="red">This is: {{ msg }}</h2>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      tyep: String,
      default: 'single file template test!',
    },
  },
  methods: {},
  data() {
    return {}
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
