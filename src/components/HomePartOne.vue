<template>
    <div class="home-partOne">
        <div class="home-partOne-header">
            <h1>Our focus</h1>
        </div>
        <div class="wrapper">
            <div class="div-image-partOne">
                <div class="div-rgba">
                    <h1 class="div-rgba-h1">User</h1>
                    <p class="div-rgba-p">Accurate and fastest news and events</p>
                    <a href="https://edition.cnn.com/"><button class="div-rgba-btn">View details <font-awesome-icon :icon="['fas', 'arrow-right']"/></button></a>
                </div>
            </div>
            <div class="div-image-partTwo">
                <div class="div-rgba">
                    <h1 class="div-rgba-h1">Content</h1>
                    <p class="div-rgba-p">Information and video content from the field</p>
                    <a href="https://www.bbc.com/news/world"><button class="div-rgba-btn">View details <font-awesome-icon :icon="['fas', 'arrow-right']"/></button></a>
                </div>
            </div>
            <div class="div-image-partThree">
                <div class="div-rgba">
                    <h1 class="div-rgba-h1">Accuracy</h1>
                    <p class="div-rgba-p">Accurate information from reliable sources</p>
                    <a href="https://www.nbcnews.com/"><button class="div-rgba-btn">View details <font-awesome-icon :icon="['fas', 'arrow-right']"/></button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePartOneComponent"
    }
</script>

<style scoped>
    .home-partOne {
        width: 1055px;
        height: 350px;
    }
    .home-partOne-header {
        text-align: center;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
    }
    .div-image-partOne {
        width: 330px;
        height: 220px;
        background-image: url('../assets/slika3.jpg');
        background-size: cover;
        border-radius: 10px;
        
    }
    .div-image-partTwo {
        width: 330px;
        height: 220px;
        background-image: url('../assets/slika89.jpg');
        background-size: cover;
        border-radius: 10px;
        
    }
    .div-image-partThree {
        width: 330px;
        height: 220px;
        background-image: url('../assets/slika100.jpg');
        background-size: cover;
        border-radius: 10px;
        
    }
    .div-rgba {
        background-color: rgba(0,0,0,0.5);
        color: white;
        height: 220px;
        border-radius: 10px;
    }
    .div-rgba-h1 {
        padding-top: 15px;
        padding-left: 20px;
        margin: 0;
        font-size: 40px;
    }
    .div-rgba-p {
        padding-left: 20px;
        font-size: 15px;
    }
    .div-rgba-btn {
        margin-top: 40px;
        margin-left: 30px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid gray;
        background-color: white;
        font-size: 13px;
        cursor: pointer;
    }
    .div-rgba-btn:hover {
        background-color: rgb(231, 230, 230);
    }
    .div-rgba-btn:active {
        background-color: white;
    }
</style>