<template>
  <div class="home">
    <img src="/img/bannerHome.webp" class="imgBannerHome" />
    <div class="actions">
      <h1>CONTRATIEMPO</h1>
      <div class="buttons">
        <button class="play" style="background: #b11623">
          <i class="fa-solid fa-play"></i> Assistir filme
        </button>
        <button class="bookmark" style="background: #0a0c0f; width: 250px">
          <i class="fa-solid fa-bookmark"></i> Adicionar para ver depois
        </button>
      </div>
    </div>
  </div>
  <div class="sectionMovies">
    <div class="movies">
      <div class="title">
        <h1>Assistir Filmes Online</h1>
        <ul>
          <button>Lançamentos</button>
          <button>Novos filmes</button>
          <button>Populares</button>
          <button>Mais assistidos</button>
        </ul>
      </div>
      <swiper
        :spaceBetween="30"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '450': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 30,
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
          <div class="card">
            <img :src="imagePath + movie.poster_path" />
            <p>{{ movie.title }}</p>
            <div class="voto">
                <span><i class="fa-solid fa-people-group"></i> {{ movie.popularity }}</span>
                <span><i class="fa-solid fa-star"></i> {{ parseInt(movie.vote_average).toFixed(1) }}</span>
            </div>
          </div>
        </swiper-slide> 
      </swiper>
    </div>
    <div class="series">
      <div class="title">
        <h1>Assistir Séries Online</h1>
        <ul>
          <button>Novos Episódios</button>
          <button>Novas séries</button>
          <button>Populares</button>
          <button>Mais assistidas</button>
        </ul>
      </div>
      <swiper
        :spaceBetween="30"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '450': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 30,
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
          <div class="card">
            <img :src="imagePath + movie.poster_path" />
            <p>{{ movie.title }}</p>
            <div class="voto">
                <span><i class="fa-solid fa-people-group"></i> {{ movie.popularity }}</span>
                <span><i class="fa-solid fa-star"></i> {{ parseInt(movie.vote_average).toFixed(1) }}</span>
            </div>
          </div>
        </swiper-slide> 
      </swiper>
      
    </div>
  </div>
</template>

<script>
import api from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: "Home",
  data() {
    return {
      arrayMovies: [],

      imagePath: "https://image.tmdb.org/t/p/w500/",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async loadApi() {
      const data = await api.get(
        `/movie/popular?api_key=d11262ba9a25a972aae056ee15f2dff9&language=en-US`
      );
      console.log(data.data.results);
      this.arrayMovies = data.data.results;
    },
  },
  mounted() {
    this.loadApi();
  },
};
</script>

<style lang="sass" src="./style.scss" scoped>
</style>