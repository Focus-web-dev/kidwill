<template>
  <div class="type-constructor">
    <h1 class="type-constructor__title">{{ store.getters.typeData.attributes.title }}</h1>
    <div class="constructor"></div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";

const props = defineProps({
  typeId: {
    type: String,
    required: true,
  },
});

const store = useStore();
await store.dispatch("fetchType", props.typeId);
</script>

<style lang="scss"></style>
