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
    <SectionCarousel title="Assistir Filmes Online" contentButtonOne="Todos os filmes" contentButtonTwo="Mais votados" />
    <SectionCarousel title="Assistir Séries Online" contentButtonOne="Todos as séries" contentButtonTwo="Mais votadas" />
  </div>
</template>

<script>
import api from "../../services/api";

import SectionCarousel from './SectionCarousel/SectionCarousel.vue'

export default {
  name: "Home",
  components: {
    SectionCarousel,
  }
};
</script>

<style lang="sass" src="./style.scss" scoped>
</style>