<template>
  <div class="base-card base-shadow">
    <div class="base-card__preview lazy-loading"></div>
    <div class="base-card__content">
      <div>
        <div class="title lazy-loading"></div>
        <div class="description lazy-loading"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/global/vars.scss";

.base-card {
  display: flex;
  flex-direction: row;

  &__preview {
    width: 40%;
    height: 250px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 60%;
    padding: 24px;

    background-color: $white;

    div {
      display: flex;
      flex-direction: column;

      .title {
        width: 100%;
        height: 25px;

        margin-bottom: 14px;
      }

      .description {
        width: 100%;
        height: 25px;
      }
    }

    button {
      margin-top: 24px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-direction: column;

    &__preview {
      width: 100%;
    }

    &__content {
      width: 100%;
    }
  }
}
</style>
