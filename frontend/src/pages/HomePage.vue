<template>
  <div class="main-page">
    <div class="design-selection">
      <h1 class="design-selection__title">Выберите дизайн</h1>

      <div class="design-selection-items">
        <BaseCard
          v-for="facility in store.getters.facilitiesList"
          :key="facility.id"
          :image="imageSrc(facility.attributes.preview.data.attributes.url)"
          :title="facility.attributes.title"
          :description="facility.attributes.description"
          buttonLabel="Выбрать"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import imageSrc from "@/helpers/imageSrc";
import BaseCard from "@/components/BaseCard.vue";

const store = useStore();

onBeforeMount(async () => {
  await store.dispatch("getFacilities");
});
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.design-selection {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 24px;
  }

  .design-selection-items {
    display: flex;
    flex-direction: column;
  }
}
</style>
