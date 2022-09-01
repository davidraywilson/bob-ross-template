<script setup lang="ts">
</script>

<template>
    <main>
        <h2>Vuex</h2>

        <div class='img-wrapper'>
            <img src='../assets/vuex_screenshot.png' alt='Vue Devtools' style='max-width: 100%' />
        </div>

        <p>
            Vuex is how we manage state across components/pages. We can do this through a series
            of dispatches & mutations. The Vuex tab in the tools allows us to see those changes
            and manipulate the data in real time.
        </p>

        <a class='btn' @click='$router.push("/questions")'>Questions</a>

    </main>
</template>
