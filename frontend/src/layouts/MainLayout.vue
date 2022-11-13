<template>
  <div class="main-layout">
    <Suspense>
      <template #default>
        <MainHeader />
      </template>
      <template #fallback>
        <MainHeaderLazy />
      </template>
    </Suspense>

    <div class="container">
      <div class="main-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainHeaderLazy from "@/components/MainHeaderLazy.vue";
</script>

<style lang="scss">
.main-layout__content {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
