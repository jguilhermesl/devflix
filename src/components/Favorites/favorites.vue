<template>
  <div class="favorites">
    <div class="allMoviesFavorite">
      <span>Filmes favoritos</span>
      <ul>
          <router-link v-for="movie in favoritesList" :key="movie.id" :to="'/movies/' + movie.id">
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorites",
  data() {
    return {
      favoritesList: [],

      imagePath: "https://image.tmdb.org/t/p/w500/",
    };
  },
  methods: {
    loadFavorites() {
      const list = localStorage.getItem("favoriteMovies");
      this.favoritesList = JSON.parse(list)
    },
  },
  mounted() {
      this.loadFavorites()
  },
};
</script>

<style lang="sass" src="./style.scss" scoped>
</style>