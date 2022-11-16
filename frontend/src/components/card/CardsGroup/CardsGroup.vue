<template>
  <div class="group">
    <TitleDescription
      class="group__title-description"
      :title="props.title"
      :description="props.description"
    />
    <ul
      v-if="props.cardsData"
      class="group-cards-list"
    >
      <li
        v-for="card in props.cardsData"
        :key="card?.id"
        class="group-cards-list__item"
      >
        <BaseCard
          :url="card?.attributes?.preview?.data?.attributes?.url"
          :alt="card?.attributes?.preview?.data?.attributes?.alternativeText"
          :title="card?.attributes?.title"
          :cardId="card?.id"
          @action="onCardAction"
        />
      </li>
    </ul>
    <p v-else>{{ errorMessages.emptyDesigns }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

import TitleDescription from "@/components/base/TitleDescription/TitleDescription.vue";
import BaseCard from "@/components/card/BaseCard/BaseCard.vue";

import errorMessages from "@/constants/errorMessages";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  designId: {
    type: Number,
    required: true,
  },
  cardsData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["cardAction"]);

const onCardAction = (cardId) => emit("cardAction", cardId);
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
