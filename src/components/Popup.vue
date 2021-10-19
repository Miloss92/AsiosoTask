<template>
    <div class="popup-div" v-if="prikazan == 'yes'">
        <div class="popup-video">
            
            <button @click="changeCondition()" class="btn-x"><font-awesome-icon :icon="['fas', 'times']"/></button>

            <iframe width="800" height="600" src="https://www.youtube.com/embed/EE9HTqJqWN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopupComponent",
        props: [
            "prikazan"
        ]
        ,
        data: function(){
            return {
                
            }
        },
        methods: {
            changeCondition(){
                this.$emit('changeCondition','no');
            }
        },
        
    }
</script>

<style scoped>
    .popup-div {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .popup-video {
        width: 800px;
        height: 630px;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        background-color: black;
    }
    .btn-x {
        float: right;
        height: 30px;
        width: 30px;
        border-radius: 900px;
        cursor: pointer;
        background-color: rgb(195, 195, 195);
    }
</style>