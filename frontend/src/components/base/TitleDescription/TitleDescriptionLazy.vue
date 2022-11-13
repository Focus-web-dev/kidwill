<template>
  <div class="title-description">
    <div class="title-description__title lazy-loading"></div>
    <div class="title-description__description lazy-loading"></div>
    <div class="title-description__description_new-line lazy-loading"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/global/vars.scss";

.title-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  &__title {
    width: 20%;
    height: 32px;

    margin: 0;
    margin-bottom: 14px;

    @media screen and (max-width: $breakpoint-md) {
      width: 50%;
    }
  }

  &__description {
    width: 90%;
    height: 16px;

    margin: 0;

    &_new-line {
      margin: 0;
      margin-top: 10px;

      width: 70%;
      height: 16px;
    }
  }
}
</style>
