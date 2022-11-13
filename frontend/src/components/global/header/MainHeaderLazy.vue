<template>
  <div class="header base-shadow">
    <div class="container">
      <div class="header-content">
        <RouterLink to="/">
          <div class="header-content__logo lazy-loading"></div>
        </RouterLink>

        <div class="phone">
          <div class="phone__link lazy-loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 12px 0;

    &__logo {
      width: 125px;
      height: 50px;
    }
  }
}

.phone {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__link {
    width: 150px;
    height: 25px;
  }
}
</style>
