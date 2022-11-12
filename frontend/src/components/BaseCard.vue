<template>
  <div class="base-card base-shadow">
    <img
      :src="props.image"
      class="base-card__preview"
    />
    <div class="base-card__content">
      <div>
        <h3 v-if="props.title">{{ props.title }}</h3>
        <p v-if="props.description">{{ props.description }}</p>
      </div>

      <button
        v-if="props.buttonLabel"
        class="base-button"
        @click="onAction"
      >
        {{ props.buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: null,
  },

  title: {
    type: String,
    required: true,
    default: null,
  },

  description: {
    type: String,
    required: false,
    default: null,
  },

  buttonLabel: {
    type: String,
    required: false,
    default: "OK",
  },
});

const emit = defineEmits(["action"]);

const onAction = () => {
  emit("action");
};
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.base-card {
  display: flex;
  flex-direction: row;

  &__preview {
    width: 40%;
    background-color: $primary;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 60%;
    padding: 24px;

    background-color: $white;

    div {
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: 14px;
      }
    }

    button {
      margin-top: 24px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-direction: column;

    &__preview {
      width: 100%;
    }

    &__content {
      width: 100%;
    }
  }
}
</style>
