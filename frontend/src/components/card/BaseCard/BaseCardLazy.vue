<template>
  <div class="base-card base-shadow">
    <div class="base-card__preview lazy-loading"></div>
    <div class="base-card__content">
      <div class="lazy-loading"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__preview {
    width: 100%;
    min-height: 250px;
    object-fit: cover;
  }

  &__content {
    padding: 14px;

    div {
      width: 40%;
      height: 18px;
      margin: 0;
    }
  }
}
</style>
