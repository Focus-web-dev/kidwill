<template>
  <div>
    <v-row>
      <v-col>
        <h1>Выберите дизайн</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="facility in store.getters.facilitiesList"
        :key="facility.id"
        lg="4"
        md="6"
        sm="6"
        xs="12"
      >
        <BaseCard
          :image="`${baseURL}${facility.attributes.preview.data.attributes.url}`"
          :title="facility.attributes.title"
          buttonLabel="Выбрать"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import BaseCard from "@/components/BaseCard.vue";

const store = useStore();
const baseURL = process.env.VUE_APP_STRAPI_BASE_URL;

onBeforeMount(async () => {
  await store.dispatch("getFacilities");
});
</script>
