<template>
  <ul class="group-list">
    <li
      v-for="index in 3"
      :key="index"
      class="group-list__item"
    >
      <CardsGroupLazy />
    </li>
  </ul>
</template>

<script setup>
import CardsGroupLazy from "@/components/card/CardsGroup/CardsGroupLazy.vue";
</script>

<style lang="scss" scoped>
.group-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}
</style>
