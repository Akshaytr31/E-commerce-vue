<template>
  <v-card class="nav-card">
    <div class="nav-container">
      <div class="nav-container-elm">
        <div class="nav-container-elm1">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="nav-container-elm2">ShopVue</span>
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
import CommonButton from "./CommonButton.vue";
import DropDown from "./DropDown.vue";
</script>
<style lang="scss" scoped>
.nav-card {
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

.nav-container-elm {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-container-elm1 {
  display: flex;
  gap: 1px;
}

.nav-container-elm1 span {
  height: 13px;
  width: 4px;
  border-radius: 50%;
  background-color: black;
}

.nav-container-elm2 {
  font-size: 16px;
  font-weight: 700;
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

  .nav-container-elm1 span {
    height: 15px;
    width: 5px;
  }

  .nav-container-elm2 {
    font-size: 20px;
  }
}

@media screen and (min-width: 900px) {
  .nav-container-menu {
    gap: 40px;
  }

  .nav-container-elm2 {
    font-size: 22px;
  }

  .nav-container-elm1 span {
    height: 17px;
    width: 6px;
  }
}
</style>
