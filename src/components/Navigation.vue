<template>
    <div>
         <div id="nav">
            <router-link  id="logo" to="/">Vue & Laravel with API </router-link>
            <router-link to="/">All Lesson </router-link>
            <router-link to="/lesson">Add Lesson</router-link>
            <router-link to="/course">Course</router-link>
            <router-link to="/add-course">Add Course</router-link>
            <router-link to="/category">Category</router-link>
            <router-link to="/add-category">Add Category</router-link>
          
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimpleProjectRouterNavigation',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>