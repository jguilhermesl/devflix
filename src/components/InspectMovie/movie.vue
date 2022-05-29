<template>
  <div class="inspectMovie">
    <div class="infoMovie" v-show="loading === false">
      <img :src="imagePath + movie.poster_path" />
      <div class="containerInfosMovie">
        <span class="watchMovieTitle">ASSISTIR {{ movie.title }} ONLINE</span>
        <h1>{{ movie.title }}</h1>
        <div class="genres">
          <span v-for="genre in movie.genres" v-bind:key="genre.id">{{
            genre.name
          }}</span>
        </div>
        <div class="infos">
          <span>{{ parseInt(movie.release_date) }}</span>
          <span><i class="fa-solid fa-clock"></i> {{ movie.runtime }} mIN</span>
          <span
            ><i class="fa-solid fa-star"></i> {{ movie.vote_average }}/10</span
          >
          <a
            class="trailer"
            :href="`https://www.youtube.com/results?search_query=${movie.title}`"
            target="_blank"
            >TRAILER <i class="fa-solid fa-angle-right"></i
          ></a>
        </div>
        <p>{{ movie.overview }}</p>
        <div class="buttons">
          <button v-show="movieLiked" @click="saveMovie()"><i class="fa-solid fa-heart"></i> CURTIR</button>
          <button v-show="movieLiked === false" @click="removeMovie()" class="deslikeButton"><i class="fa-solid fa-heart"></i> DESCURTIR</button>
          <button><i class="fa-solid fa-arrow-pointer"></i> VER SITE</button>
        </div>
      </div>
    </div>
    <img :src="imagePath + movie.backdrop_path" class="imgBanner" />
    <div class="loading" v-show="loading">
      <Loading />
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import Loading from "../Loading/loading.vue";

export default {
  name: "InspectMovie",
  data() {
    return {
      id: this.$route.params.id,

      loading: false,

      movie: {},
      movieLiked: false,
      imagePath: "https://image.tmdb.org/t/p/w500/",
    };
  },
  methods: {
    async loadApi() {
      this.loading = true;
      const data = await api.get(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=d11262ba9a25a972aae056ee15f2dff9&language=en-US`
      );
      this.movie = data.data;
      this.loading = false;
      console.log(data.data)
    },
    saveMovie() {
      const myList = localStorage.getItem('favoriteMovies');
      let savedMovies = JSON.parse(myList) || []

      const hasMovie = savedMovies.some( savedMovie => parseInt(savedMovie.id) === parseInt(this.id))

      if (hasMovie) {
        console.log('Esse filme já tem, viu?')
        return 
      } 
      
      savedMovies.push(this.movie)
      localStorage.setItem('favoriteMovies', JSON.stringify(savedMovies))
      this.checkedIfMovieWasLike();
    },
    checkedIfMovieWasLike(){
      const myList = localStorage.getItem('favoriteMovies');
      let savedMovies = JSON.parse(myList) || []

      const hasMovie = savedMovies.some( savedMovie => parseInt(savedMovie.id) === parseInt(this.id))

      if(hasMovie) {
        this.movieLiked = false
      } else {
        this.movieLiked = true
      }
    },
    removeMovie() {
      const myList = localStorage.getItem('favoriteMovies');
      let savedMovies = JSON.parse(myList) || []

      console.log(savedMovies)
      const filterMovies = savedMovies.filter( movie => parseInt(movie.id) !== parseInt(this.id))
      console.log(filterMovies)
      localStorage.setItem('favoriteMovies', JSON.stringify(filterMovies))
      this.checkedIfMovieWasLike();
    }
  },
  mounted() {
    this.loadApi();
    this.checkedIfMovieWasLike();
  },
  components: {
    Loading,
  },
};
</script>

<style src="./style.scss" lang="sass" scoped>
</style>