<template>
  <div class="type-constructor">
    <h1 class="type-constructor__title">{{ store.getters.typeData.attributes.title }}</h1>
    <div class="constructor">
      <ConstructorPreview :baseImage="store.getters.typeData.attributes.base.data.attributes" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";

import ConstructorPreview from "@/components/preview/ConstructorPreview/ConstructorPreview.vue";

const props = defineProps({
  typeId: {
    type: String,
    required: true,
  },
});

const store = useStore();
await store.dispatch("fetchType", props.typeId);
</script>

<style lang="scss">
.type-constructor {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 24px;
  }
}
</style>
