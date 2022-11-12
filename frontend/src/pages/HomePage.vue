<template>
  <div class="main-page">
    <div class="design-selection">
      <h1 class="design-selection__title">Выберите дизайн</h1>

      <Transition name="slide-fade">
        <Suspense>
          <template #default>
            <FacilitiesList />
          </template>
          <template #fallback>
            <FacilitiesListLazy />
          </template>
        </Suspense>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import FacilitiesList from "@/components/FacilitiesList.vue";
import FacilitiesListLazy from "@/components/FacilitiesListLazy.vue";
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
