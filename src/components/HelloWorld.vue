<template>
  <div class="greetings">
    <img src="/img/trailerGIF.gif" />
  </div>

  <swiper :spaceBetween="30" :breakpoints="{
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
  }" :slidesPerGroup="1" :loopFillGroupWithBlank="true" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="movie in arrayMovies" v-bind:key="movie.id">
      <div class="card">
        <img :src="imagePath + movie.poster_path" />
        <p>{{ movie.title }}</p>
      </div>
    </swiper-slide>
  </swiper>

  <ul class="lista">
    <div class="card" v-for="movie in arrayMovies" v-bind:key="movie.id">
      <img :src="imagePath + movie.poster_path" />
      <p>{{ movie.title }}</p>
    </div>
  </ul>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { ref } from "vue";

import api from "../services/api";

export default {
  name: "HelloWorld",
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

<style scoped>
.greetings {
  width: 100%;
  position: relative;
}

.greetings img {
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 3px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 0;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 80%;
  object-fit: cover;
}

.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 90vw;
  margin: 0 auto;
  justify-content: center;
}

.card {
  width: 200px;
  height: 400px;
}

.card img {
  width: 100%;
}
</style>
