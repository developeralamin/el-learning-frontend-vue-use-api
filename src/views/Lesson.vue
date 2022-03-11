<template>
    <div>
        <h1>All lesson form here</h1>
          <form @submit.prevent="addLesson()"> 
           <div class="container" >
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">

                    <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input  type="text" v-model="lesson.title"  class="form-control" id="exampleFormControlInput1" placeholder="Input your category">
                    </div>

                     <div class="mb-2">
                    <label for="exampleFormControlInput1" class="form-label">Description</label>
                    <input  type="text"  v-model="lesson.description"  class="form-control" id="exampleFormControlInput1" placeholder="Input your category">
                    </div>

                </div>

            <div class="col-md-4"></div>
             
           
              </div>
           </div>
            <button class="btn btn-success" type="submit">submit</button>
          </form>
    </div>
</template>

<script>

import axios from 'axios';


export default {
    name: 'SimpleProjectRouterLesson',

    data() {
        return {
            lesson:{
                title:'',
                description:''
            }
        };
    },

    mounted() {
        
    },

    methods: {
        addLesson(){
            axios.post('http://127.0.0.1:8000/api/lesson',this.lesson).then(response => {
                 alert(response.data.message)
                 this.lesson.title = null
                 this.lesson.description = null
            })  
        }
    },
};
</script>

<style lang="scss" scoped>

</style>