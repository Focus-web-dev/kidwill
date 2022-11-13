<template>
  <div class="title-description">
    <h3>{{ props.title }}</h3>
    <p v-if="description">{{ props.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/global/vars.scss";

.title-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: $black;
  }

  p {
    margin-top: 12px;
    color: $black;
  }
}
</style>
