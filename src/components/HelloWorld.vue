<script setup lang="ts">
    defineProps<{
        msg: string;
    }>();
</script>

<template>
    <div class="greetings">
        <h1 class="tagline" v-html="msg"></h1>
    </div>
</template>

<style>
.tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    margin: 0 auto;
}

.accent {
    font-weight: inherit;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: border-box;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        display: block;
        text-align: left;
    }
}
</style>
