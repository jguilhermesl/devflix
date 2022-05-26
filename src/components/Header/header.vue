<template>
    <header>
        <div class="logo">
            <span><i class="fa-solid fa-video"></i> DEVFLIX</span>
        </div>
        <ul>
            <router-link to="/"><li>Início</li></router-link>
            <router-link to="/movies"><li>Filmes</li></router-link>
            <router-link to="/series"><li>Séries</li></router-link>
            <router-link to="/us"><li>Nós</li></router-link>         
        </ul>
        <div class="actions">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span><i class="fa-solid fa-user"></i> Minha conta</span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}

</script>

<style lang="scss" src="./style.scss" scoped>

</style>