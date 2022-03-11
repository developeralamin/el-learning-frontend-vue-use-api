<template>
    
         <Navigation/>
         <div class="container">
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
             <router-view/>
         </div>
        

</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
     Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
