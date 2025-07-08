<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <div v-bind="props">
          <v-icon class="icon">mdi-menu</v-icon>
        </div>
      </template>
      <div style="width: 310px;">
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <router-link :to="`${item.path}`" style="text-decoration: none;color: black;">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </div>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
const items = [{ title: "Home",path:'/' }, { title: "Product",path:'/products' }, { title: "Cart",path:'/cart' }];
</script>
<style lang="scss" scoped>
.icon{
    font-size: 30px;
}
</style>