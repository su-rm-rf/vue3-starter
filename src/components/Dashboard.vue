<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

// defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref("");
const msg = ref('Vue 3 + Vite + Element Plus')

const toast = () => {
  ElMessage.success("Hello");
};

const value1 = ref(true);
</script>

<template>
  <Logos my="4" />
  <h1 color="$ep-color-primary">{{ msg }}</h1>

  <!-- <p>See <a href="https://cn.vuejs.org/" target="_blank">Vue3</a> for more information.</p>
  <p>See <a href="https://cn.vitejs.dev/" target="_blank">Vite</a> for more information.</p>
  <p>See <a href="https://element-plus.org/zh-CN/" target="_blank">Element Plus</a> for more information.</p> -->

  <!-- example components -->
  <div class="mb-4">
    <el-button size="large" @click="toast">El Message</el-button>
  </div>

  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <el-button @click="count++">count is: {{ count }}</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  </div>

  <div>
    <el-tag type="success" class="m-1">Tag 1</el-tag>
    <el-tag type="warning" class="m-1">Tag 2</el-tag>
    <el-tag type="danger" class="m-1">Tag 3</el-tag>
    <el-tag type="info" class="m-1">Tag 4</el-tag>
  </div>

  <div>
    <el-switch v-model="value1" />
    <el-switch
      v-model="value1"
      class="m-2"
      style="--ep-switch-on-color: black; --ep-switch-off-color: gray;"
    />
  </div>

  <div class="my-2">
    <el-input class="m-2" v-model="input" style="width: 200px" />
    <el-date-picker
      class="m-2"
      v-model="curDate"
      type="date"
      placeholder="Pick a day"
    ></el-date-picker>
  </div>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
      >vue3-vite-elementplus</a
    >
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
      >unplugin-element-plus/examples/vite</a
    >
  </p>
</template>

<style>
.ep-button {
  margin: 4px;
}
.ep-button + .ep-button {
  margin-left: 0;
  margin: 4px;
}
</style>
