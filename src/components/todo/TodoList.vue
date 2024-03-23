<script setup lang="ts">
  import { useUserStore } from '~/store/user'
  import { useTodoStore } from '~/store/todo'

  const user = useUserStore()
  const todo = useTodoStore()

  const itemName = ref("")
  
  function addItemToTodo() {
    if (!itemName.value) return
    todo.addItem(itemName.value)
    itemName.value = ''
  }
</script>

<template>
  <div>
    <h2>hello {{ user.name }}</h2>
    <el-form>
      <el-form-item>
        <el-input
          type="textarea"
          v-model="itemName"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click.prevent="addItemToTodo">添加</el-button>
      </el-form-item>
    </el-form>

    <el-card v-for="item in todo.items" :key="item.name">
      {{ item.name }}({{ item.amount }})
      <el-button @click="todo.removeItem(item.name)">X</el-button>
    </el-card>
  </div>
</template>

<style lang="scss">
</style>
