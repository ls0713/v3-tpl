<template>
  <el-button @click="gets">clicks</el-button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'


// defineProps<{ msg: string }>()

const count = ref(0)

// 获取Vue实例 没有this
let { appContext:{config: {globalProperties}} } = getCurrentInstance()!
function gets  () {
  console.log(globalProperties.$api.getset())
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
