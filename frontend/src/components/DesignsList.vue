<template>
  <div
    v-if="store.getters.designsList"
    class="designes-list"
  >
    <BaseCard
      v-for="design in store.getters.designsList"
      :key="design.id"
      :image="imageSrc(design.attributes.preview.data.attributes.url)"
      :title="design.attributes.title"
      :description="design.attributes.description"
      buttonLabel="Выбрать"
    />
  </div>
  <p v-else>{{ errorMessages.emptyDesigns }}</p>
</template>

<script setup>
import { useStore } from "vuex";

import BaseCard from "@/components/BaseCard.vue";
import imageSrc from "@/helpers/imageSrc";

import errorMessages from "@/constants/errorMessages";

const store = useStore();

await store.dispatch("getDesigns");
</script>

<style lang="scss" scoped>
.designes-list {
  display: flex;
  flex-direction: column;
}
</style>
