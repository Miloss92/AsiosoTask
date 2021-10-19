<template>
  
  <div id="app">  
    <header-component></header-component>
    <router-component></router-component>
    <subscribe-component></subscribe-component>
    <footer-component></footer-component>
    
  </div>

</template>


<script>

import HeaderComponent from './components/Header.vue';
import RouterComponent from './components/Router.vue';
import SubscribeComponent from './components/Subscribe.vue';
import FooterComponent from './components/Footer.vue';



//import axios from 'axios';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    RouterComponent,
    SubscribeComponent,
    FooterComponent
  }
}
</script>





<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Arial, Verdana, sans-serif;
  }


</style>
