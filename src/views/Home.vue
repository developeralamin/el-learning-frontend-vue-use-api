<template>
    <div>
         <h1>I am happy to use API wiht Laravel and Vue....This is home section</h1>

     <div v-for="lesson in lessons" :key="lesson.id">
          {{ lesson.title }}
          <!-- {{ lesson.description }} -->
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SimpleProjectRouterHome',

    data() {
        return {
             lessons :[]
        };
    },

    mounted() {
          axios.get('http://127.0.0.1:8000/api/lesson')
            .then(response  => {
              this.lessons = response.data.alamin
            })
    },

    methods: {
        
    },
};
</script>

<style>

</style>