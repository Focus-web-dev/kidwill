<template>
  <div class="facilities-list">
    <BaseCardLazy
      v-for="index in 3"
      :key="index"
    />
  </div>
</template>

<script setup>
import BaseCardLazy from "@/components/BaseCardLazy.vue";
</script>

<style lang="scss" scoped>
.facilities-list {
  display: flex;
  flex-direction: column;
}
</style>
