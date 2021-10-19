<template>
  
    <div class="header-image">
        <div class="header-wrapper">
            <div class=header>

                <div class="menu">

                    <div class="logo">
                        TOPNEWS
                    </div>

                    <router-link to="/home" style="text-decoration: none">
                        <div class="inline">
                            <p class="p-routerLink">HOME<font-awesome-icon :icon="['fas', 'home']" class="font-awesome-icon"/></p>
                        </div>
                    </router-link>

                    <router-link to="/about" style="text-decoration: none">
                        <div class="inline">
                            <p class="p-routerLink">ABOUT<font-awesome-icon :icon="['fas', 'question']" class="font-awesome-icon"/></p>
                        </div>
                    </router-link>

                    <router-link to="/blog" style="text-decoration: none">
                        <div class="inline">
                            <p class="p-routerLink">BLOG<font-awesome-icon :icon="['fas', 'book']" class="font-awesome-icon"/></p>
                        </div>
                    </router-link>

                    <router-link to="/contact" style="text-decoration: none">
                        <div class="inline">
                            <p class="p-routerLink">CONTACT<font-awesome-icon :icon="['fas', 'envelope']" class="font-awesome-icon"/></p>
                        </div>
                    </router-link>

                    <div class="phone-number">
                        <p><font-awesome-icon :icon="['fas', 'phone-alt']" class="phone-number-fontawesome"/>+381 69 542 3363</p>
                    </div>
                </div>
                <div class="div-text-video"> 
                    <h1>Breaking new's and event's from United States</h1>
                    <p class="subscribe-text">Be always informed with us. Subscribe to our site, and follow the latest news and events in the United States</p>
                    
                    <div class="watch-video-div">
                        <div class="explore">
                           <a href="https://www.foxnews.com/"><button class="btn-explore">Explore more <font-awesome-icon :icon="['fas', 'arrow-right']"/></button></a>
                        </div>
                        <p class="p-watch-video">Watch video</p><button @click="openPopup()" class="btn-watch-video"><font-awesome-icon :icon="['fas', 'play-circle']"/></button>        
                    </div>
                </div>
                <popup-component :prikazan="otvoren" v-on:changeCondition="updateCondition($event)"></popup-component>
            </div>
        </div>
    </div>

</template>

<script>
    import PopupComponent from './Popup.vue';
    
    export default {
        name: 'HeaderComponent',
        components:  {
            PopupComponent
         },
        data: function(){
            return {
                otvoren: "no"
            }
        },
        methods: {
            openPopup(){
                this.otvoren = "yes";
            },
            updateCondition(updatedCondition){
                this.otvoren = updatedCondition;
            }
        }
    }

</script>

<style scoped>
    .header-image {
        width: 1755px;
        height: 600px;
        border: 1px solid gray;
        position: relative;
        background-image: url('../assets/slika4.jpg');
        background-size: cover;
        background-position: center;
        border-bottom-right-radius: 50%;
    }
    .header-wrapper {
        width: 1755px;
        height: 600px;
        background: rgba(0,0,0,0.6);
        border-bottom-right-radius: 50%;
    }
    .header {
        height: 600px;
        width: 1055px;
        position: absolute;
        left: 20%;
    }
    .logo {
        float: left;
        font-size: 35px;
        font-weight: bold;
        width: 200px;
        height: 50px;
        margin-top: 5px;
        margin-right: 30px;
        padding: 15px;
        color: white;
    }
    .menu {
        display: inline-block;
        height: 100px;
    }
    .inline {
        float: left;
        width: 120px;
        height: 30px;
        margin-right: 15px;
        padding-bottom: 25px;
        text-align: center;
        margin-top: 10px;
        text-decoration-line: none;
        border-radius: 10px;
    }
    .inline:hover {
        background-color: rgba(192, 192, 192, 0.2);
    }
    
    .p-routerLink {
        font-size: 18px;
        color: white;
    }
    .font-awesome-icon {
        margin-left: 5px;
    }
    .phone-number {
        float: left;
        color: white;
        margin-top: 10px;
        margin-left: 100px;
    }
    .phone-number-fontawesome {
        font-size: 14px;
        margin-right: 5px;
    }
    .div-text-video {
        margin-left: 10px;
        width: 570px;
        margin-top: 50px;
        color: white;
    }
    .subscribe-text {
        font-size: 20px;
    }
    h1 {
        font-size: 45px;
    }
    .p-watch-video {
        display: inline-block;
    }
    .btn-watch-video {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-left: 5px;
        cursor: pointer;
    }
    .btn-watch-video:hover {
        background-color: rgb(177, 201, 211);
    }
    .btn-watch-video:active {
        background-color: white;
    }
    .watch-video-div {
        margin-top: 40px;
    }
    .explore {
        display: inline-block;
        margin-right: 15px;
        width: 150px;
        text-align: center;
        font-size: 17px;
    }
    .btn-explore {
        background-color: rgba(0,0,0,0.2);
        color: white;
        height: 50px;
        width: 150px;
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
    }
    .btn-explore:hover {
        background-color: rgba(0,0,0,0.3)
    }
    
    @media screen and (max-width: 767px){
        .header-wrapper {
            width: 1300px;
            height: 700px;
        }
        .header-image {
            width: 1300px;
            height: 700px;
        }
        .header {
            position: absolute;
            left: 0px;
        }
        .phone-number {
            display: none;
        }
        h1 {
            font-size: 60px;
            margin-left: 10px;
        }
        .inline {
            height: 60px;
            width: 220px;
        }
        .p-routerLink {
            font-size: 30px;
            width: 220px;
            height: 60px;
            margin-top: 20px;
            padding-top: 10px;
        }
        .subscribe-text {
            font-size: 32px;
            margin-left: 10px;
        }
        .btn-explore {
            width: 190px;
            height: 80px;
            font-size: 24px;
            margin-left: 10px;
        }
        .btn-watch-video {
            height: 70px;
            width: 70px;
            font-size: 25px;
        }   
        .p-watch-video {
            display: inline-block;
            margin-left: 50px;
            font-size: 24px;
        }
        .menu {
            width: 1280px;
        }
        .logo {
            font-size: 50px;
            margin-right: 80px;
        }
    }
    
</style>

