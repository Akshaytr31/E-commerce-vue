<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <div v-bind="props">
          <v-icon class="icon">mdi-menu</v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
const items = [{ title: "Home" }, { title: "Product" }, { title: "Cart" }];
</script>
<style lang="scss" scoped>
.icon{
    font-size: 30px;
}
</style>

