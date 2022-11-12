<template>
  <div class="phone">
    <a :href="`tel:${phoneWithoutSymbols}`">{{ props.phone }}</a>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  phone: {
    type: String,
    required: true,
  },
});

const phoneWithoutSymbols = computed(() => props.phone.replace(/\D+/g, ""));
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.phone {
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;

    transition: color 0.1s ease-in-out;

    @media screen and (max-width: $breakpoint-md) {
      font-size: 14px;
    }

    &:hover {
      animation: errorShaking 0.3s;
      color: $primary;
    }
  }
}
</style>
