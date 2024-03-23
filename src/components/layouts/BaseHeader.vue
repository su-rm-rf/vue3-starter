<script lang="ts" setup>
  import { toggleDark } from "~/composables";
  import github from '~/assets/github.svg'
</script>

<template>
  <div class="el-menu-demo">
    <el-menu mode="horizontal" class="w-550px">
      <el-menu-item index="1">
        <router-link to="/">VVE</router-link>
      </el-menu-item>

      <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="3" disabled>Info</el-menu-item> -->

      <el-menu-item index="4">
        <router-link to="/todo">TodoList</router-link>
      </el-menu-item>

      <!-- <el-menu-item index="5" h="full" @click="toggleDark()">
        <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--ep-menu-item-height)"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item> -->
    </el-menu>

    <div class="right-menu">
      <div class="right-menu-item">
        <button
          class="border-none bg-transparent cursor-pointer"
          @click="toggleDark()"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </div>
      <div class="right-menu-item">
        <a href="https://github.com/su-rm-rf/vue3-starter" target="_blank">
          <img :src="github" alt="Github logo" />
        </a>
      </div>        
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .el-menu-demo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .right-menu {
      border-bottom: solid 1px var(--ep-menu-border-color);
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 30px;
      &-item {
        margin: 0 10px;
        /* height: var(--ep-menu-item-height); */
      }
    }
  }
</style>