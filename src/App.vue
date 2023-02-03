<template>
  <button @click="goHello">click</button>
  <img :src="imgs" alt="">
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
let imgs!: any
function goHello ():void {
  imgs = () => import('@/assets/vue.svg')!
  console.log(imgs)
  router.push({path: 'demo'})
}
</script>

<style scoped lang="scss">

</style>
