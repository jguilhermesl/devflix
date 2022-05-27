<template>
  <div class="home">
    <img src="/img/bannerHome.webp" class="imgBannerHome" />
    <div class="actions">
      <h1>CONTRATIEMPO</h1>
      <div class="buttons">
        <button class="play" style="background: #b11623">
          <i class="fa-solid fa-play"></i> Assistir filme
        </button>
        <button class="bookmark" style="background: #121417; width: 250px">
          <i class="fa-solid fa-bookmark"></i> Adicionar para ver depois
        </button>
      </div>
    </div>
  </div>
  <div class="sectionMovies">
    <SectionCarousel title="Assistir Filmes Online" contentButtonOne="Novos filmes" contentButtonTwo="Mais assistidos" />
    <SectionCarousel title="Assistir Séries Online" contentButtonOne="Novas séries" contentButtonTwo="Mais assistidas" />
  </div>
</template>

<script>
import api from "../../services/api";

import SectionCarousel from './SectionCarousel/SectionCarousel.vue'

export default {
  name: "Home",
  data() {
    return {
      arrayMovies: [],

      imagePath: "https://image.tmdb.org/t/p/w500/"
    };
  },
  components: {
    SectionCarousel,
  },
  props: {
    msg: String,
  },
  methods: {
    async loadApi() {
      const data = await api.get(
        `/movie/popular?api_key=d11262ba9a25a972aae056ee15f2dff9&language=en-US`
      );
      this.arrayMovies = data.data.results
    },
  },
  mounted() {
    this.loadApi();
  },
};
</script>

<style lang="sass" src="./style.scss" scoped>
</style>