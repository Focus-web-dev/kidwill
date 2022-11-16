<template>
  <div class="design-constructor">
    <Suspense>
      <template #default>
        <TypeConstructor :typeId="route.params.typeId" />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TypeConstructor from "@/components/type/TypeConstructor/TypeConstructor.vue";

const route = useRoute();
</script>

<style lang="scss">
.design-constructor {
  display: flex;
  flex-direction: row;
}
</style>
