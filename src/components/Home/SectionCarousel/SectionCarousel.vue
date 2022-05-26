<template>
    <div class="movies">
      <div class="title">
        <h1>{{ title }} </h1>
        <ul>
          <button>Lançamentos</button>
          <button>{{ contentButtonOne }}</button>
          <button>Populares</button>
          <button>{{ contentButtonTwo }}</button>
        </ul>
      </div>
      <CarouselComponent :arrayMovies="arrayMovies" /> 
    </div>
</template>

<script>
import api from "../../../services/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import CarouselComponent from "./Carousel/carousel.vue";

export default {
  name: "Carousel",
  data() {
    return {
      arrayMovies: [],

      imagePath: "https://image.tmdb.org/t/p/w500/",
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    CarouselComponent
},
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  props: {
    title: String,
    contentButtonOne: String,
    contentButtonTwo: String
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