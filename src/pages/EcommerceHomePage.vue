<template>
    <div>
        <HomeCard/>
        <CommonFooter/>
    </div>
</template>

<script setup lang="ts">
import CommonFooter from '@/components/CommonFooter.vue';
import HomeCard from '@/components/HomeCard.vue';
import { useEcommerceStore } from '@/stores/appStore';

const appStore=useEcommerceStore()
</script>

<style lang="scss" scoped>

</style>