<template>
  <img
    class="preview-image"
    :src="imageUrl"
    :alt="props.alt"
  />
</template>

<script setup>
import { defineProps, computed } from "vue";
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
});

const imageUrl = computed(() => imageSrc(props.url));
</script>

<style lang="scss" scoped></style>
