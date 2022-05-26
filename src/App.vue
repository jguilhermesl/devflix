<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header/header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style src="./globalStyles.scss" lang="sass">
</style>
