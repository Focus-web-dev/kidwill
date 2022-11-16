<template>
  <div class="base-card base-shadow">
    <img
      :src="imageUrl"
      :alt="props.alt"
      class="base-card__preview lazy-loading"
    />
    <div class="base-card__content">
      <h5>{{ props.title }}</h5>
      <button
        class="base-button"
        @click="onAction"
      >
        Выбрать
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import imageSrc from "@/helpers/imageSrc";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cardId: {
    type: Number,
    required: true,
  },
});

const imageUrl = computed(() => imageSrc(props.url));

const emit = defineEmits(["action"]);
const onAction = () => emit("action", props.cardId);
</script>

<style lang="scss">
.base-card {
  display: flex;
  flex-direction: column;

  &__preview {
    width: 100%;
    min-height: 250px;
    object-fit: cover;
  }

  &__content {
    padding: 14px;

    h5 {
      font-size: 18px;
      margin-bottom: 18px;
    }

    button {
      padding: 6px 12px;
    }
  }
}
</style>
