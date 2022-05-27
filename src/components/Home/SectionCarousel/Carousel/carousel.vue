<template>
  <div>
    <swiper
      :spaceBetween="30"
      :breakpoints="{
        '320': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '550': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1208': {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        '1504': {
          slidesPerView: 7,
          spaceBetween: 60,
        },
      }"
      :slidesPerGroup="1"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="movie in arrayMovies" v-bind:key="movie.id">
        <router-link :to="'/movies/' + movie.id">
          <div class="card">
            <img :src="imagePath + movie.poster_path" />
            <p>{{ movie.title }}</p>
            <div class="voto">
              <span
                ><i class="fa-solid fa-people-group"></i>
                {{ movie.popularity }}</span
              >
              <span
                ><i class="fa-solid fa-star"></i>
                {{ parseInt(movie.vote_average).toFixed(1) }}</span
              >
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "CarouselComponent",
  data() {
    return {
      imagePath: "https://image.tmdb.org/t/p/w500/",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    arrayMovies: Array,
  },
  created() {
    console.log(this.teste);
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style src="../style.scss" lang="sass" scoped>
</style>