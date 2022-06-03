<template>
    <header class="header-nav">
        <nav>
            <RouterLink
                v-for="(nav, index) in navsData"
                :to="nav.path"
                :key="index"
                @click="isActive = index"
            >
                <span
                    class="nav-link"
                    :class="{ active: nav.path === $route.path }"
                    >{{ nav.name }}</span
                >
            </RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    setup() {
        const navsData = [
            {
                path: "/",
                name: "Loading",
            },
            {
                path: "/loading-2",
                name: "Loading 2",
            },
        ];

        return {
            navsData,
        }
    },


};
</script>

<style lang="scss" scoped>
.header-nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bgcolor-header);

    nav {
        display: flex;
        width: 60%;
        justify-content: center;
    }

    a {
        text-decoration: none;

        :hover {
            background-color: var(--white-color);
            color: rgb(252, 137, 6);
        }

        .active {
            background-color: var(--white-color);
            color: rgb(252, 137, 6);
        }
    }

    .nav-link {
        text-decoration: none;
        font-size: 2rem;
        margin: 0 5px;
        padding: 10px 30px;
        border-radius: 1rem;
        color: var(--white-color);
        cursor: pointer;
        font-weight: 700;
    }
}
</style>
