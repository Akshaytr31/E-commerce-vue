<template>
  <div>
    <v-btn :class="['common-button', variant]" @click="handleEvent">
      <v-icon v-if="icon" class="icon">{{ icon }}</v-icon>
      <span>{{ text }}</span>
    </v-btn>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: String,
  variant: {
    type: String,
    default: "primary",
  },
  icon: String,
});

const emit = defineEmits(["onClick"]);

const handleEvent = () => {
  emit("onClick");
};
</script>
<style lang="scss" scoped>
.common-button {
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  text-transform: unset;
  letter-spacing: unset;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.02);
}

.primary {  
  background-color: #d1dff4;
  color: #0e0e0e;
}

.secondary {
    background-color: #f0f1f5;
    color: #0e0e0e;
}
</style>
