<template>
  <div class="counter-container">
    <div>Select Quatity</div>
    <div class="counter-buttons">
      <CommonButton variant="counter" text="+" @on-click="increment" />
      <div :v-model="countValue" class="count">{{ countValue }}</div>
      <CommonButton variant="counter" text="-" @on-click="decrement" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from "vue";

import CommonButton from "./CommonButton.vue";

const countValue = ref(0);
const emit = defineEmits<{
  (e: "number", value: number): void;
}>();

const increment = () => {
  countValue.value = countValue.value + 1;
  console.log("clicked");
  emit("number", countValue.value);
};

const decrement = () => {
  if (countValue.value > 0) {
    countValue.value--;
  } else {
    countValue.value;
  }
  emit("number", countValue.value);
};
</script>
<style lang="scss" scoped>
.counter-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.counter-buttons {
  display: flex;
  gap: 5px;
  align-items: center;
}

.count {
  width: 20px;
  display: flex;
  justify-content: center;
}
</style>
