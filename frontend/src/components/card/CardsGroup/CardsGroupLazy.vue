<template>
  <div class="group">
    <TitleDescriptionLazy class="group__title-description" />
    <ul class="group-cards-list">
      <li
        v-for="index in 3"
        :key="index"
        class="group-cards-list__item"
      >
        <BaseCardLazy />
      </li>
    </ul>
  </div>
</template>

<script setup>
import TitleDescriptionLazy from "@/components/base/TitleDescription/TitleDescriptionLazy.vue";
import BaseCardLazy from "@/components/card/BaseCard/BaseCardLazy.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/sass/global/vars.scss";
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  &__title-description {
    margin-bottom: 24px;
  }
}

.group-cards-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 26px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
</style>
