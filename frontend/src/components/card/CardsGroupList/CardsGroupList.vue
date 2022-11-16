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
        :designId="design?.id"
        :cardsData="design?.attributes?.types?.data"
        @cardAction="onTypeSelection"
      />
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CardsGroup from "@/components/card/CardsGroup/CardsGroup.vue";

const store = useStore();
await store.dispatch("fetchDesigns");

const router = useRouter();
const onTypeSelection = (typeId) => router.push(`/constructor/${typeId}`);
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
