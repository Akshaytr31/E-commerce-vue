<template>
  <v-card class="nav-card">
    <div class="nav-container">
      <div class="nav-container-elements">
        <div class="nav-container-logo">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="nav-container-heading">ShopVue</span>
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

.nav-container-logo {
  display: flex;
  gap: 1px;
}

.nav-container-logo span {
  height: 13px;
  width: 4px;
  border-radius: 50%;
  background-color: black;
}

.nav-container-heading {
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

  .nav-container-logo span {
    height: 15px;
    width: 5px;
  }

  .nav-container-heading {
    font-size: 20px;
  }
}

@media screen and (min-width: 900px) {
  .nav-container-menu {
    gap: 40px;
  }

  .nav-container-heading {
    font-size: 22px;
  }

  .nav-container-elm1 span {
    height: 17px;
    width: 7px;
  }
}
</style>
