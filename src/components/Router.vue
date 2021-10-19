<template>

    <div class="router-wrapper">
        <div class="router">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>

export default {
    name: "RouterComponent"
}

</script>

<style scoped>
    .router-wrapper {
        width: 1760px;
    }
    .router {
        margin: auto;
        height: 1400px;
        width: 1050px;
    }
    
</style>
