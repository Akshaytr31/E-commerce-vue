<template>
  <div class="main-container">
    <div  class="product-heading">
      <router-link to="/products" class="products-page">
        <div>{{ heading }}</div>
      </router-link>
      <div>/{{ product?.title }}</div>
    </div>
    <div class="product-container">
      <div class="product-image-wrapper">
        <img :src="product?.image" alt="" />
      </div>
      <div class="product-detailse">
        <div class="product-title">{{ product?.title }}</div>
        <div>{{ product?.description }}</div>
        <div class="product-price-rating">
          <div>$ {{ product?.price }}</div>
          <div>Rating {{ product?.rating.rate }}</div>
        </div>
        <div>Only {{ product?.rating.count }} products left</div>
        <CommonCounter @number="setCount" />
        <CommonButton text="Add to cart" @on-click="addToCart"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import { useEcommerceStore } from "@/stores/appStore";
import { getProductById } from "@/api/apiClient";
import type cart from "@/types/Cart";
import type Products from "@/api/products/types";
import CommonButton from "./CommonButton.vue";
import CommonCounter from "./CommonCounter.vue";

const countValue=ref();
const appStore=useEcommerceStore()

const cartItems=ref<cart>({
  id:0,
  count:0,
  price:0,
  title:'',
  image:''
})

const addToCart=()=>{
  appStore.setCartItems({
    id: parseInt(route.params.id as string),
    count: countValue.value,
    price: product?.price as number,
    title: product?.title as string,
    image: product?.image as string
  })
  cartItems.value.count=0
}

const setCount=(count: number)=>{
  countValue.value=count;
}

const route = useRoute();
const heading = route.name;
const id = route.params.id as string;
const product: Products | undefined = await getProductById(parseInt(id));
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgb(57, 56, 56);
  max-width: 1200px;
  margin: 0 auto;
}

.product-container {
  position: relative;
  padding: 60px;
  margin: 30px;
  display: flex;
  justify-content: center;
  background-color: white;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

.product-heading {
  display: flex;
  font-weight: 500;
  padding-inline: 10px;
}

.product-container img {
  max-width: 500px;
  max-height: 500px;
}

.product-image-wrapper {
  display: flex;
  justify-content: center;
}

.product-detailse {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-title {
  font-weight: 600;
  font-size: 22px;
}

.product-price-rating {
  display: flex;
  justify-content: space-between;
}

.products-page{
  text-decoration: none;
  color: rgb(2, 2, 155);
}

.products-page:hover{
  text-decoration:underline;
}
@media screen and (max-width: 900px) {
  .product-container {
    flex-direction: column;
  }

  .product-container img {
    max-width: 350px;
    max-height: 350px;
  }

  .product-container {
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {
  .product-container img {
    max-width: 300px;
    max-height: 300px;
  }

  .product-container {
    padding: 10px;
    margin: 0;
    margin-inline: 10px;
  }
}
</style>
