<template>
  <div class="main-layout">
    <MainHeader />
    <div class="container">
      <div class="main-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
</script>

<style lang="scss">
.main-layout__content {
  margin-top: 50px;
}
</style>
