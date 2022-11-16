<template>
  <div class="constructor-preview">
    <PreviewImage
      class="constructor-preview__item constructor-preview__base"
      :url="props.baseImage?.url"
      :alt="props.baseImage?.alternativeText"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import PreviewImage from "@/components/preview/PreviewImage/PreviewImage.vue";

const props = defineProps({
  baseImage: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.constructor-preview {
  position: relative;

  width: 500px;
  height: 500px;

  &__item {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &__base {
    z-index: 0;
  }
}
</style>
