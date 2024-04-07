<template>
  <li @click="$router.push(`/blog-details`)">
    <div class="article">
      <img class="article__img" :src="require(`@/assets/img/${fileImg}`)" alt="article">
      <h3 class="article__title">{{ title }}</h3>
      <div class="article__date-wrap">
        <p class="article__date">{{ date }}</p>
        <a class="article__arrow">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ArticlesComponent",
  props: ['article'],
  computed: {
    fileImg() {

      return this.article.fileImg;
    },
    title() {
      return this.article.title;
    },
    date() {
      return this.article.date;
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

.article {
  padding: 21px;
  height: 521px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

  &:hover {
    background-color: $colorPrimary3;

    .article__arrow {
      background-color: #fff;
    }
  }

  &__img {
    border-radius: 45px 45px 0 0;
  }

  &__title {
    color: $colorPrimary2;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }

  &__date {
    color: $colorTextGrey2;
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
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