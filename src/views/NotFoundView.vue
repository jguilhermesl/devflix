<template>
  <div class="contentNotFound">
    <span>404 Not Found</span>
    <h1>Poxa, desculpe! Não encontramos nenhuma rota com esse parâmetro.</h1>
    <router-link to="/">Voltar para home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #fff;
}

span {
  color: var(--red)
}

h1 {
  font-size: 3rem;
  width: 60vw;
  text-align: center;
}

a {
  background: var(--red);
  padding: 15px 30px;
  border-radius: 40px;
  margin-top: 2rem;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>