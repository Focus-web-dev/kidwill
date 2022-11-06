<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },

  computed: {
    layout() {
      return `${this.$route.meta.layout || "empty"}-layout`;
    },
  },
};
</script>
