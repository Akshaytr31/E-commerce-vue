<template>
    <div style="height: 100px;"></div>
  <div>
    <suspense>
      <CommonProduct #default />
      <template #fallback>
        <div class="loading-container">Loading...</div>
      </template>
    </suspense>
  </div>
</template>
<script setup lang="ts">
import CommonProduct from "@/components/CommonProduct.vue";
</script>
<style lang="scss" scoped>
.loading-container{
  font-size: 32px;
  font-weight: 500;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>