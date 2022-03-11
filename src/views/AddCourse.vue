<template>
    <div>
         <h1>Add Course Section</h1>

         <form @submit.prevent="addCourse()"> 


           <div class="container" >
           <div class="row">
           <div class="col-md-4"></div>
           <div class="col-md-4">

            <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">Course Title</label>
                <input  type="text"  v-model="course.title" class="form-control" id="exampleFormControlInput1" placeholder="Course Title">
                  <!-- {{ course.title }} -->
            </div>

             <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">Course Description</label>
                <input  type="text"  v-model="course.description" class="form-control" id="exampleFormControlInput1" placeholder="Course Descrition">
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
    name: 'SimpleProjectRouterAddcourse',

    data() {
        return {
            course:{
                title:'',
                description:''
            }
        };
    },
    methods: {
        addCourse(){
            axios.post('http://127.0.0.1:8000/api/course',this.course).then(response  =>{

                 alert(response.data.message)
                 console.log(response)

                 this.course.title = null
                 this.course.description = null
            })
        }
    },
    mounted() {
        
    },


};
</script>

<style lang="scss" scoped>

</style>