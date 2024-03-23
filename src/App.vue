<script setup>
  
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide />
      <div w="full" py="4" class="main-container-body">
        <!-- <Logos my="4" /> -->
        <!-- <Dashboard msg="Vue 3 + Vite + Element Plus" /> -->
        <router-view></router-view>
      </div>
    </div>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 0px);
  &-body {
    overflow-y: auto;
  }
}
</style>
