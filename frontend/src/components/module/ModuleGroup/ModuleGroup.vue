<template>
  <div class="module-group">
    <h6 class="module-group__title">{{ props.groupData.attributes.group_label }}</h6>
    <ul class="module-group__modules modules">
      <li
        v-for="moduleItem in props.groupData.attributes.group_items"
        :key="moduleItem.id"
        class="base-shadow"
      >
        <ModuleItem
          :moduleData="moduleItem"
          :isSelected="isModuleSelected(moduleItem.id)"
          :groupId="props.groupData.id"
          @action="onModuleAction"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

import ModuleItem from "@/components/module/ModuleItem/ModuleItem.vue";

const props = defineProps({
  groupData: {
    type: Object,
    required: true,
  },

  selected: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["moduleAction"]);

const isModuleSelected = (id) => props.selected.indexOf(id) !== -1;

const isMultiple = computed(() => props.groupData?.attributes?.amount === "multiple");

const onModuleAction = (module) => {
  let isExists = false;
  props.groupData.attributes.group_items.forEach((item) => {
    const result = props.selected.indexOf(item.id) !== -1;
    if (result) isExists = true;
  });

  if (!isMultiple.value && props.selected.length && isExists) {
    const alreadySelectedModule = props.groupData.attributes.group_items.find(
      (module) => module.id === props.selected[0]
    );

    if (alreadySelectedModule && module.id !== alreadySelectedModule.id) {
      emit("moduleAction", alreadySelectedModule);
    }
  }

  emit("moduleAction", module);
};
</script>

<style lang="scss">
@import "@/assets/sass/global/vars.scss";

.module-group {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 18px;
  }
}

.modules {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 26px;

  @media screen and (max-width: $breakpoint-xl) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
  }
}
</style>
