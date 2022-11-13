<template>
  <div class="main-page">
    <div class="design-selection">
      <h1 class="design-selection__title">Выберите дизайн</h1>

      <Suspense>
        <template #default>
          <DesignsList />
        </template>
        <template #fallback>
          <DesignsListLazy />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import DesignsList from "@/components/DesignsList.vue";
import DesignsListLazy from "@/components/DesignsListLazy.vue";
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.design-selection {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 24px;
  }
}
</style>
