<template>
  <v-card class="nav-card">
    <div class="nav-container">
      <div class="nav-container-elements">
        <div class="nav-container-logo">
          <img :src="logo" alt="logo" />
        </div>
      </div>
      <DropDown class="menu-icon" />
      <div class="nav-container-menu">
        <router-link to="/" style="text-decoration: none; color: black">
          <span>Home</span>
        </router-link>
        <router-link to="/products" style="text-decoration: none; color: black">
          <span>Product</span>
        </router-link>
        <router-link to="/cart">
          <CommonButton variant="secondary" text="cart" />
        </router-link>
      </div>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import logo from "./src/assets/img/image.png"
import CommonButton from "./CommonButton.vue";
import DropDown from "./DropDown.vue";

</script>
<style lang="scss" scoped>
.nav-card {
  position: fixed;
  width: 100%;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.02);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-container-elements {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-container-logo img {
  height: 50px;
}

.nav-container-menu {
  display: none;
}

.menu-icon {
  display: block;
}

@media screen and (min-width: 700px) {
  .menu-icon {
    display: none;
  }

  .nav-container-menu {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    font-weight: 500;
  }
}

@media screen and (min-width: 900px) {
  .nav-container-menu {
    gap: 40px;
  }
}
</style>
