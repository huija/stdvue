<template>
  <div>
    <!-- 子路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div>
      <router-link :to="{ name: 'Page1' }" tag="button">goto Page1</router-link>
      <router-link :to="{ name: 'Page2' }" tag="button">goto Page2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
