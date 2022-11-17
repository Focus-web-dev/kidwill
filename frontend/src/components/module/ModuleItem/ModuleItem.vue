<template>
  <div class="module">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="module__preview"
    />

    <div class="module__content">
      <div class="content">
        <p class="content__title">{{ moduleData.title }}</p>
        <p class="content__price">{{ moduleData.price }}</p>
      </div>

      <button
        class="base-button"
        @click="onSelection"
      >
        {{ props.isSelected ? "Удалить" : "Выбрать" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

import imageSrc from "@/helpers/imageSrc";

const props = defineProps({
  moduleData: {
    type: Object,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: true,
  },
  groupId: {
    type: Number,
    required: true,
  },
});

const imageUrl = computed(() => imageSrc(props.moduleData?.image?.data?.attributes?.url));
const imageAlt = computed(() => imageSrc(props.moduleData?.image?.data?.attributes?.alternativeText));

const emit = defineEmits(["action"]);

const onSelection = () => emit("action", props.moduleData, props.groupId);
</script>

<style lang="scss">
.module {
  display: flex;
  flex-direction: column;

  height: 100%;

  &__preview {
    max-width: 100%;
    object-fit: cover;
    background-color: black;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 12px;
    width: 100%;
    height: 100%;

    .content {
      margin-bottom: 12px;

      &__title {
        font-size: 16px;
        margin-bottom: 8px;
      }

      &__price {
        font-size: 14px;
      }
    }
  }
}
</style>
