<template>
  <div class="tooltip-container">
    <v-tooltip :text="title" class="tooltip">
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="tooltip-title">
          {{ title }}
        </div>
      </template>
    </v-tooltip>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<style scoped>
.tooltip-title {
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 1010px) {
  .tooltip-title {
    max-width: 300px;
  }
}

@media screen and (max-width: 800px) {
  .tooltip-title {
    max-width: 150px;
  }
}

@media screen and (max-width: 600px) {
  .tooltip-title {
    max-width: 60px;
  }
}
</style>
