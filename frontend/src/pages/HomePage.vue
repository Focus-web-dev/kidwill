<template>
  <div class="main-page">
    <div class="design-selection">
      <h1 class="design-selection__title">Выберите дизайн</h1>

      <Suspense>
        <template #default>
          <CardsGroupList />
        </template>

        <template #fallback>
          <CardsGroupListLazy />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import CardsGroupList from "@/components/card/CardsGroupList/CardsGroupList.vue";
import CardsGroupListLazy from "@/components/card/CardsGroupList/CardsGroupListLazy.vue";
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
