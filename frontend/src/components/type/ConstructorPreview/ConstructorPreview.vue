<template>
  <div class="constructor-preview">
    <p class="constructor-preview__price">Общая стоимость: {{ props.price }}р.</p>
    <div class="constructor-preview-image">
      <PreviewImage
        class="constructor-preview-image__item constructor-preview__base"
        :url="props.baseImage?.url"
        :alt="props.baseImage?.alternativeText"
      />

      <img
        v-for="image in props.images"
        :key="image.id"
        :src="imageSrc(image.attributes.url)"
        :alt="image.attributes.alternativeText"
        :style="{ 'z-index': image.z_index }"
        class="constructor-preview-image__item"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import PreviewImage from "@/components/type/PreviewImage/PreviewImage.vue";

import imageSrc from "@/helpers/imageSrc";

const props = defineProps({
  baseImage: {
    type: Object,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss">
.constructor-preview {
  display: flex;
  flex-direction: column;

  &__price {
    text-align: right;
    margin-bottom: 14px;
  }
}

.constructor-preview-image {
  position: relative;

  width: 100%;
  height: 350px;

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
