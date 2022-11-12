<template>
  <div class="facilities-list">
    <BaseCard
      v-for="facility in store.getters.facilitiesList"
      :key="facility.id"
      :image="imageSrc(facility.attributes.preview.data.attributes.url)"
      :title="facility.attributes.title"
      :description="facility.attributes.description"
      buttonLabel="Выбрать"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

import BaseCard from "@/components/BaseCard.vue";
import imageSrc from "@/helpers/imageSrc";

const store = useStore();

await store.dispatch("getFacilities");
</script>

<style lang="scss" scoped>
.facilities-list {
  display: flex;
  flex-direction: column;
}
</style>
