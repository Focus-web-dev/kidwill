<template>
  <ul class="group-list">
    <li
      v-for="design in store.getters.designsList"
      :key="design?.id"
      class="group-list__item"
    >
      <CardsGroup
        :title="design?.attributes?.title"
        :description="design?.attributes?.description"
        :cardsData="design?.attributes?.types?.data"
      />
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";
import CardsGroup from "@/components/card/CardsGroup/CardsGroup.vue";

const store = useStore();
await store.dispatch("fetchDesigns");
</script>

<style lang="scss">
.group-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}
</style>
