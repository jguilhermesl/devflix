<template>
  <header>
    <div class="logo">
      <span><i class="fa-solid fa-video"></i> DEVFLIX</span>
    </div>
    <div :class="menuIsActive ? 'contentHeader off' : 'contentHeader on'  " >
      <ul>
        <router-link to="/"><li>Início</li></router-link>
        <router-link to="/"><li>Filmes</li></router-link>
        <router-link to="/"><li>Séries</li></router-link>
        <router-link to="/us"><li>Nós</li></router-link>
      </ul>
      <div class="actions">
        <i class="fa-solid fa-magnifying-glass"></i>
        <router-link to="/favorites"
          ><i class="fa-solid fa-heart"></i> FILMES CURTIDOS</router-link
        >
      </div>
    </div>
    <div class="menuHamburguer">
      <button @click="changeMenuMode()"><i class="fa-solid fa-bars" ></i></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
      return {
          menuIsActive: false
      }
  },
  methods: {
      changeMenuMode(mode) {
          console.log(mode)
         this.menuIsActive = !this.menuIsActive
      }
  }
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>