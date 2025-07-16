<template>
  <div></div>
  <CommonSerchBar v-model="search"/>
  <h1>{{ heading }}</h1>
  <div class="product-container">
    <div v-for="item in filteredItems" :key="item.id" class="product-wrapper">
      <router-link :to="`/products/${item.id}`">
        <div class="product-image">
          <img :src="item.image" alt="product" />
        </div>
        <div class="product-details">
          <div class="product-title">{{ item.title }}</div>
          <div class="product-price-rating">
            <div>$ {{ item.price }}</div>
            <div>Rating {{ item.rating.rate }}</div>
          </div>
          <div class="procuct-count">
            Only {{ item.rating.count }} items left
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed,ref } from "vue";
import { getAllProducts } from "@/api/apiClient";
import type Product from "@/types/Products";
import type Search from "@/types/Search";
import CommonSerchBar from "./CommonSerchBar.vue";

const heading='All products'
const items = await getAllProducts();

const search=ref<Search>({
  title:""
})

const titles=items.map((item:Product)=>item.title)

const filteredItems=computed(()=>{
  return items.filter((item:Product)=>
  item.title.toLowerCase().includes(search.value.title.toLowerCase())
)
})
</script>
<style lang="scss" scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  padding: 10px 20px 20px 20px;
  max-width: 1300px;
  margin: 0 auto;
}

.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.product-container img {
  max-width: 250px;
  max-height: 250px;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-decoration: none;
  color: rgb(57, 57, 57);
}

.product-wrapper {
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  background-color: white;
  padding: 20px;
  box-sizing: content-box;
  color: rgb(63, 63, 63);
  flex-direction: column;
}

.product-image {
  display: flex;
  justify-content: center;
}

.product-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.product-price-rating {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
}

.product-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 270px;
}

.procuct-count {
  font-size: 13px;
}

h1{
  padding-inline: 30px;
  max-width: 1260px;
  margin: 20px auto 10px;
  color: rgb(44, 44, 44);
}

@media screen and (min-width: 680px) {
  .product-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 980px) {
  .product-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1300px) {
  .product-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
