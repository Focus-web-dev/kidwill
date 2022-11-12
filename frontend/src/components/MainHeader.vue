<template>
  <div class="header base-shadow">
    <div class="container">
      <div class="header-content">
        <img
          :src="logotype"
          class="header-content__logo"
        />

        <PhoneCall :phone="phone" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { globalHeader } from "@/services/headerAPI";
import { ref, onBeforeMount } from "vue";

import imageSrc from "@/helpers/imageSrc";
import PhoneCall from "@/components/PhoneCall.vue";

const logotype = ref("");
const phone = ref("");

onBeforeMount(async () => {
  const response = await globalHeader();
  logotype.value = imageSrc(response.data?.data?.attributes?.logotype?.data?.attributes?.url);
  phone.value = response.data?.data?.attributes?.phone;
});
</script>

<style lang="scss">
.header {
  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 12px 0;

    &__logo {
      max-height: 50px;
    }
  }
}
</style>
