<template>
  <div class="footer">
    <div class="footer-container">
      <div
        v-for="content in footerContent"
        :key="content.title"
        class="footer-elements"
      >
        <router-link
          :to="content.path"
          style="text-decoration: none; color: #808080"
        >
          <div class="footer-element">{{ content.title }}</div>
        </router-link>
      </div>
    </div>
    <div class="footer-socialMedias">
      <v-icon>mdi-twitter</v-icon>
      <v-icon>mdi-facebook</v-icon>
      <v-icon>mdi-instagram</v-icon>
    </div>
    <div class="footer-copyright">{{ copyRight }}</div>
  </div>
</template>
<script setup lang="ts">
import { copyRight, footerContent } from "@/constants/Index";
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 20px;
}

.footer-elements {
  display: flex;
  text-decoration: none;
}

.footer-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding-inline: 30px;
  max-width: 1000px;
}

.footer-socialMedias {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 10px;
  color: #808080;
}

.footer-copyright {
  display: flex;
  justify-content: center;
  color: #808080;
}

@media screen and (max-width: 400px) {
  .footer-container {
    gap: 0;
  }
}
</style>
