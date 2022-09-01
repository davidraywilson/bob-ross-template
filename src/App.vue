<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <div id='app'>
        <header>
            <div class="wrapper">

                <HelloWorld msg='Welcome to <span class="accent">Bob Ross</span>' />

                <nav>
                    <router-link to="/">Intro</router-link>
                    <router-link to="/get-started">Get Started</router-link>
                    <router-link to="/components">Vue Components</router-link>
                    <router-link to="/vuex">Vuex</router-link>
                    <router-link to="/questions">Questions</router-link>
                </nav>

            </div>
        </header>

        <router-view />

    </div>
</template>

<style scoped>
    #app {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 16px;
        padding-bottom: 124px;
    }

    header {
        display: flex;
        align-items: start;
        line-height: 1.5;
        margin-bottom: 40px;
        padding: none;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    .logo {
        display: block;
        margin: 0 2rem 0 0;
    }

    nav {
        width: 100%;
        font-size: 12px;
    }

    nav a:not(.router-link-exact-native) {
        color: var(--color-text);
    }

    nav a.router-link-exact-active {
        color: hsla(160, 100%, 37%, 1);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        margin-right: 24px;
    }

    nav a:first-of-type {
        border: 0;
    }
</style>
