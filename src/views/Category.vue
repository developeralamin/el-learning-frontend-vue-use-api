<template>
    <div>
           <h1>API Laravel and Vue....Category Section</h1>
         <div v-for="category in categoyries" :key="category.id">
           {{ category.name }}
         </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SimpleProjectRouterCategory',

    data() {
        return {
             categoyries:[]
        };
    },

    mounted() {
        axios.get('http://127.0.0.1:8000/api/category')
         .then(response => {
             this.categoyries = response.data.POST
         })
        
    },

    methods: {
        
    },
};
</script>

<style>

</style>