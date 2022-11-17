<template>
  <div class="type-constructor">
    <h1 class="type-constructor__title">{{ store.getters.typeData.attributes.title }}</h1>
    <div class="constructor">
      <ul class="constructor__left module-groups">
        <li
          v-for="group in store.getters.typeData?.attributes?.groups?.data"
          :key="group.id"
          class="module-groups__item"
        >
          <ModuleGroup
            :selected="selectedModules"
            :groupData="group"
            @moduleAction="onModuleGroupAction"
          />
        </li>
      </ul>

      <ConstructorPreview
        class="constructor__right"
        :baseImage="store.getters.typeData?.attributes?.base?.data?.attributes"
        :images="constructorImages"
        :price="generalPrice"
      />
    </div>
  </div>
</template>

<script setup>
import { createToaster } from "@meforma/vue-toaster";

import { useStore } from "vuex";
import { defineProps, reactive, ref } from "vue";

import ConstructorPreview from "@/components/type/ConstructorPreview/ConstructorPreview.vue";
import ModuleGroup from "@/components/module/ModuleGroup/ModuleGroup.vue";

const toast = createToaster();

const props = defineProps({
  typeId: {
    type: String,
    required: true,
  },
});

const store = useStore();
await store.dispatch("fetchType", props.typeId);

const constructorImages = ref([]);
const selectedModules = reactive([]);
const generalPrice = ref(0);

const onModuleGroupAction = (module) => {
  const moduleIndex = selectedModules.indexOf(module.id);

  if (moduleIndex === -1) {
    selectedModules.push(module.id);

    module.image.data.z_index = module.z_index;
    constructorImages.value.push(module.image.data);

    generalPrice.value += Number(module.price);
    toast.success(`+ ${module.price}р.`);
  } else {
    selectedModules.splice(moduleIndex, 1);

    const moduleImageId = module.image.data.id;
    constructorImages.value = constructorImages.value.filter((image) => image.id !== moduleImageId);

    generalPrice.value -= Number(module.price);
    toast.info(`- ${module.price}р.`);
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.type-constructor {
  display: flex;
  flex-direction: column;

  width: 100%;

  &__title {
    margin-bottom: 24px;
  }
}

.constructor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  &__left {
    width: 50%;
    margin-right: 24px;

    @media screen and (max-width: $breakpoint-lg) {
      width: 40%;
      margin-right: 18px;
    }
  }

  &__right {
    width: 50%;

    @media screen and (max-width: $breakpoint-lg) {
      width: 60%;
    }
  }
}

.module-groups {
  display: flex;
  flex-direction: column;

  &__item {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}
</style>
