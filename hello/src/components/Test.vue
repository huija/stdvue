<template>
  <h2 class="red" @click="handleClick">This is: {{ msg }}</h2>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: {
      type: String,
      default: 'single file template test!',
    },
  },
  methods: {
    handleClick: function() {
      console.log('Test be clicked')
      this.$emit('clicked', 'huija')
    },
  },
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
