<template>
  <div style="height: 80px"></div>
  <div class="main-container">
    <div class="card-container">
      <div class="card-overlay">
        <h1>{{ content.title }}</h1>
        <p>{{ content.discription }}</p>
        <router-link to="/products">
          <CommonButton variant="primary" text="shop now" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommonButton from "./CommonButton.vue";

const content = {
  title: "Eleva Your Lifestyle",
  discription:
    "Discover curated collections for every aspect of your life, from fashion to home essentials",
};
</script>
<style lang="scss" scoped>
.card-container {
  background-image: url("/src/assets/img/miniature-shopping-cart-7584887_1280.jpg");
  margin: 30px;
  margin-right: 45px;
  height: 65vh;
  border-radius: 15px;
  width: 100vw;
  max-width: 1150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.card-overlay {
  color: rgb(227, 230, 233);
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: hsla(0, 0%, 0%, 0.4);
  border-radius: 15px;
  padding: 30px 30px 100px 30px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;
}

.card-overlay h1 {
  font-size: 50px;
}

.card-overlay p {
  font-size: 18px;
  font-weight: 500;
}

.main-container {
  display: flex;
  justify-content: center;
  width: 100vw;
}

@media screen and (max-width: 615px) {
  .card-container {
    margin: 0px;
    border-radius: unset;
  }

  .card-overlay {
    border-radius: unset;
  }

  .card-overlay h1 {
    font-size: 40px;
  }

  .card-overlay p {
    font-size: 16px;
  }
}
</style>
