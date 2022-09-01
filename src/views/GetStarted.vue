<script setup lang="ts">
</script>

<template>
    <main>
        <h2>Let's get started</h2>

        <div class='img-wrapper'>
            <a href='https://bit.ly/3AAa0aB' target='_blank'>
                <img src='../assets/extension_screenshot.png' alt='Vue Devtools'
                  style='max-width: 100%' />
            </a>
        </div>

        <h3>Vue 2 &nbsp;&nbsp;===&nbsp;&nbsp; Legacy</h3>
        <p>
            Because we use Vue 2 and Vuex we have to use the <strong>Legacy</strong>
            Vue Devtools in order to get the necessary Vuex support.
        </p>

        <a class='btn' @click='$router.push("/components")'>Vue Components</a>

    </main>
</template>
