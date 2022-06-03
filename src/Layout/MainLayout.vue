<template>
    <div class="main-layout">
        <Header />
        <router-view />
    </div>
</template>

<script>
    import { Header } from '../components/'
    export default {
        components: {
            Header,
        },
        // setup(){ methods, computed, data(), lifecycle }

    }
</script>

<style lang="scss" scoped>
    .main-layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>