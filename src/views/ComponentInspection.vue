<script setup lang="ts">
</script>

<template>
    <main>
        <h2>Component Inspection</h2>

        <div class='img-wrapper'>
            <img src='../assets/components_screenshot.png' alt='Vue Devtools'
              style='max-width: 100%' />
        </div>

        <p>
            The devtools allow us a closer inspection of the components rendered on the page.
            This allows us to dive deeper in to props, data, watches, etc...
        </p>

        <a class='btn' @click='$router.push("/vuex")'>Vuex</a>

    </main>
</template>
