<template>
  <background />
  <div class="text-white flex w-screen h-screen">
    <sidebar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Background from '@/components/Background.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  components: { Background, Sidebar }
})
</script>