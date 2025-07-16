<template>
  <div class="input-container">
    <v-icon style="color: gray">mdi-magnify</v-icon>
    <input
      type="text"
      placeholder="Enter the product name"
      :value="modelValue.title"
      @input="(e)=>handleInputChange('title',(e.target as HTMLInputElement).value)"
    />
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const props=defineProps<{modelValue:{title:string}}>();

const emit = defineEmits(["update:modelValue"]);

function handleInputChange(field: string, value: string) {
  emit("update:modelValue", {
    ...props.modelValue,
    [field]: value,
  });
}
</script>
<style lang="scss" scoped>
.input-container {
  margin-inline: 30px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #ffffff;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid rgb(234, 234, 234);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}

input {
  background-color: #ffffff;
  width: 100%;
}

input:focus {
  outline: none;
}

@media screen and (min-width: 1270px) {
  .input-container {
    max-width: 1270px;
    margin: 20px auto 5px;
  }
}
</style>
