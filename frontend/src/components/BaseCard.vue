<template>
  <v-card
    min-width="280"
    class="bg-background rounded-0"
    variant="tonal"
  >
    <v-img
      v-if="props.image"
      :src="props.image"
      height="300px"
      class="mb-3"
      cover
    ></v-img>

    <v-card-title
      v-if="props.title"
      class="mb-3"
    >
      {{ props.title }}
    </v-card-title>

    <v-card-actions class="pl-4 mb-3">
      <v-btn
        color="primary"
        variant="outlined"
        @click="onAction"
      >
        {{ buttonLabel }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null,
  },

  image: {
    type: String,
    required: false,
    default: null,
  },

  buttonLabel: {
    type: String,
    required: false,
    default: "OK",
  },
});

const emit = defineEmits(["action"]);

const onAction = () => {
  emit("action");
};
</script>
