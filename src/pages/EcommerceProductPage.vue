<template>
  <div>
    <suspense>
      <CommonProducts #default />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </div>
</template>
<script setup lang="ts">
import CommonProducts from "@/components/CommonProducts.vue";
</script>
