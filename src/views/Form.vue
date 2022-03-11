<template>
    <div>
        <h1>This is form filap section</h1>

          <form @submit.prevent="addCategory()"> 
           <div class="container" >
           <div class="row">
           <div class="col-md-4"></div>
           <div class="col-md-4">
               <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <input  type="text"  v-model="category.name" class="form-control" id="exampleFormControlInput1" placeholder="Input your category">
            </div>
           </div>
           <div class="col-md-4"></div>
             
           
           </div>

             <button class="btn btn-success" type="submit">submit</button>
           </div>
          
          </form>

    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SimpleProjectRouterForm',

    data() {
        return {
             category:{
                   name:''
               }
        };
    },
    methods: {
        addCategory(){
            axios.post('http://127.0.0.1:8000/api/category',this.category).then(response => {
                 alert(response.data.message)
                 this.category.name = null
            })  
        }
    },
        mounted() {
        
    },

};
</script>

<style lang="scss" scoped>

</style>