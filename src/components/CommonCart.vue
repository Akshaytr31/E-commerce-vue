<template>
  <div style="height: 80px"></div>
  <div class="main-container">
    <h2>{{ cart }}</h2>
    <v-table class="cart-table">
      <thead class="cart-table-heading">
        <tr>
          <th v-for="element in cartTable" :key="element">
            <div>{{ element }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          class="cart-table-elements"
        >
          <td>
            <img :src="cartItem.image" alt="" />
          </td>
          <td>
            <CommonToolTip :title="cartItem.title"/>
          </td>
          <td class="cart-table-element">{{ cartItem.count }}</td>
          <td class="cart-table-element">$ {{ cartItem.price }}</td>
          <td class="cart-table-element cart-table-remove" @click="removeCartItem(cartItem.id)">
            <div>
              {{ remove }}
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useEcommerceStore } from "@/stores/appStore";
import { cart, cartTable } from "@/constants";
import CommonToolTip from "./CommonToolTip.vue";

const appStore = useEcommerceStore();

const remove='Remove Item'

const removeCartItem=(id:number)=>{
  appStore.removeCartItem(id)
}

const cartItems =computed(()=>appStore.cartItems) ;
</script>
<style lang="scss" scoped>
.main-container{
  max-width: 1200px;
  margin: 0 auto;
}

.cart-table-elements img {
  width: 70px;
  height: 70px;
  background-color: #fff;
  padding: 10px;
  border-radius: 50px;
}

.cart-table-title {
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.cart-table-remove{
  cursor: pointer;
}

.cart-table-remove:hover{
  color: red;
}

h2{
  margin: 20px 0;
}

@media screen and (max-width: 1260px){
  .main-container{
    margin-inline: 30px;
  }
}

@media screen and (max-width: 600px) {
  .main-container{
    margin-inline: 10px;
  }
  
  .cart-table-title{
    max-width: 60px;
  }

}
</style>
