<template>
    <div>
          <h1>Courses Section here</h1>
          <div v-for="course in courses" :key="course.id">
            {{ course.title }}
              <br>
              <br>
              <br>
            {{ course.description }}
          </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SimpleProjectRouterAbout',

    data() {
        return {
            courses:[]
        };
    },

     mounted() {
        axios.get('http://127.0.0.1:8000/api/course')
         .then(response => {
             this.courses = response.data.POST
         })
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>