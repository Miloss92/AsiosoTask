<template>
    <div class="home-part-two">
        <div class="image-div"></div>
        <div class="text-div">
            <div class="part-one-text">
                <h1>Impressing our users and subscribers</h1>
                <p class="p-part-one">We want to be the first to share information from the scene everywhere in the US.</p>
            </div>
            <div class="part-two-text">
                <h3>Information</h3>
                <p>Our teams report at any time and in any place around the US.</p>
            </div>
            <div class="part-three-text">
                <h3>Video content</h3>
                <p>Follow the top breaking news in the live broadcast.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePartTwoComponent"
    }
</script>

<style scoped>
    .home-part-two {
        margin-top: 20px;
        width: 1055px;
        height: 440px;
        display: flex;
        justify-content: start;
    }
    .image-div {
        width: 690px;
        height: 370px;
        border-radius: 10px;
        background-image: url('../assets/slika25.jpg');
        background-size: cover;

    }
    .text-div {
        width: 345px;
        height: 380px;
        margin-left: 20px;
    }
    .part-one-text {
        height: 160px;
    }
    .p-part-one {
        padding-left: 15px;
    }
    .part-two-text {
        height: 105px;
        background-color: rgb(240, 239, 239);
    }
    .part-three-text {
        height: 105px;
        background-color: rgb(240, 239, 239);
    }
    h1 {
        margin: 0;
        padding-left: 15px;
        padding-bottom: 10px;
    }
    h3 {
        margin: 0;
        padding-left: 50px;
        padding-bottom: 10px;
        padding-top: 20px;
        text-decoration: underline;
    }
    p {
        margin: 0;
        padding-left: 50px;
        padding-right: 40px;
    }
</style>