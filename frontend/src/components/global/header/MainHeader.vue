<template>
  <div
    v-if="headerData"
    class="header base-shadow"
  >
    <div class="container">
      <div class="header-content">
        <RouterLink to="/">
          <img
            :src="imageSrc(headerData.data?.data?.attributes?.logotype?.data?.attributes?.url)"
            class="header-content__logo"
            :class="{ 'lazy-loading': isLoading }"
            @load="isLoading = false"
          />
        </RouterLink>

        <div class="phone">
          <a :href="`tel:${phoneWithoutSymbols}`">{{ headerData.data?.data?.attributes?.phone }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { globalHeader } from "@/services/headerAPI";
import { ref, computed } from "vue";

import imageSrc from "@/helpers/imageSrc";

const headerData = ref(await globalHeader());
const phoneWithoutSymbols = computed(() => headerData.value.data?.data?.attributes?.phone.replace(/\D+/g, ""));

const isLoading = ref(true);
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.header {
  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 12px 0;

    &__logo {
      height: 50px;

      &:hover {
        animation: errorShaking 0.3s;
        color: $primary;
      }
    }
  }
}

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
