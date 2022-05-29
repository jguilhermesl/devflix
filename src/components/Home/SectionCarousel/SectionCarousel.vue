<template>
  <div class="movies">
    <div class="title">
      <h1>{{ title }}</h1>
      <ul>
        <button @click="searchMoreRecent()" v-bind:class="{ buttonSelected: buttonSelected === textButtonMoreNews}">Mais novos</button>
        <button @click="searchMoreVoted()" v-bind:class="{ buttonSelected: buttonSelected === textButtonMoreVoted}">{{ contentButtonTwo }}</button>
        <button @click="searchMoreWatched()" v-bind:class="{ buttonSelected: buttonSelected === textButtonMoreWatched}">Mais populares</button>
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

      arrayMoviesApi: [],

      buttonSelected: "Mais novos",

      textButtonMoreNews: "Mais novos",
      textButtonMoreVoted: "Mais votados",
      textButtonMoreWatched: "Mais populares",

      imagePath: "https://image.tmdb.org/t/p/w500/",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CarouselComponent,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  props: {
    title: String,
    contentButtonOne: String,
    contentButtonTwo: String,
  },
  methods: {
    async loadApi() {
      const data = await api.get(
        `/movie/popular?api_key=d11262ba9a25a972aae056ee15f2dff9&language=en-US`
      );
      console.log(data.data.results);
      this.arrayMovies = data.data.results;
      this.arrayMoviesApi = data.data.results
    },
    searchMoreWatched() {
      let allMovies = this.arrayMovies;

      allMovies.sort((a, b) => b.popularity - a.popularity);
      this.arrayMovies = allMovies;
      this.buttonSelected = this.textButtonMoreWatched
    },
    searchMoreRecent() {
      let allMovies = this.arrayMovies;
      let arrayMovies = [];

      allMovies.forEach((movie) => {
        let array = [];

        for (let i = 0; i < movie.release_date.length; i++) {
          array.push(movie.release_date[i]);
        }
        array.splice(4, 1);
        array.splice(6, 1);

        let quantityDays =
          parseInt(array[0] + array[1] + array[2] + array[3]) * 375 +
          parseInt(array[4] + array[5]) * 30 +
          parseInt(array[6] + array[7]);

        let objectMovie = {
          movie: movie,
          quantityDaysHasPosted: quantityDays,
        };

        arrayMovies.push(objectMovie);
      });

      arrayMovies.sort(function (a, b) {
        if (a.quantityDaysHasPosted > b.quantityDaysHasPosted) {
          return -1;
        } else {
          return true;
        }
      });

      let moviesFiltered = []

      arrayMovies.forEach( item => {
        moviesFiltered.push(item.movie)
      })
      this.arrayMovies = moviesFiltered
      this.buttonSelected = this.textButtonMoreNews
    },
    searchMoreVoted() {
      let allMovies = this.arrayMovies;

      allMovies.sort((a, b) => b.vote_count - a.vote_count);
      this.arrayMovies = allMovies;
      this.buttonSelected = this.textButtonMoreVoted
    }
  },
  mounted() {
    this.loadApi();
  },
};
</script>

<style lang="sass" src="./style.scss" scoped>
</style>