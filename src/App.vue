<template>
  <Header />
  <Home />
</template>

<script>
import Header from "./components/Header/header.vue";
import Home from "./components/Home/home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
}

button {
  cursor: pointer;
}

button:hover  {
  opacity: 0.8;
}

button:active {
  opacity: 0.6;
}
</style>
