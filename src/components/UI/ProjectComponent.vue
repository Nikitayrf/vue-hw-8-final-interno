<template>
  <li @click="$router.push(`/project/${project.id}`)" class="project">
    <div class="project__img-wrap">
      <img class="project__img" :src="require(`@/assets/img/${project.fileImg}`)" alt="project__img">
    </div>
    <div class="project__desc-wrap">
      <div>
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="project__desc">{{ project.subTitle }}</p>
      </div>
      <a class="project__arrow">
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: ['project'],
  computed: {},
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";


.project {
  display: flex;
  flex-direction: column;
  gap: 24px;
  break-inside: avoid;

  &:hover {
    background-color: $colorPrimary3;

    .project__arrow {
      background-color: #fff;
    }
  }

  &__img-wrap {
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__desc-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: $colorPrimary2;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
  }

  &__desc {
    color: $colorTextGrey2;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }

  &__arrow {
    bottom: 37px;
    right: 21px;
    width: 52px;
    height: 52px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background-color: $colorPrimary3;
    cursor: pointer;
  }
}
</style>