<template>
    <div class="home-component">
        <home-part-one-component></home-part-one-component>
        <home-part-two-component></home-part-two-component>
        <news-component></news-component>
    </div>
</template>

<script>
    import HomePartOneComponent from './HomePartOne.vue';
    import HomePartTwoComponent from './HomePartTwo.vue';
    import NewsComponent from './News.vue';

    export default {
        name: "HomeComponent",
        components: {
            HomePartOneComponent,
            HomePartTwoComponent,
            NewsComponent
        }
    }
</script>

<style scoped>
    .home-component {
        width: 1055px;
        height: 1200px;
    }
    
</style>