<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Lesson List</h5>
                        <!-- <router-link :to="{name: 'create-product'}" class="btn btn-primary">Create Product</router-link> -->
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Image </th>
                                    <th> Title </th>
                                    <th> Description </th>
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                            <tbody v-if="courses.length">
                                <tr v-for="product in courses" :key="product.id">
                                    <td style="width: 100px"> {{ product.id }} </td>
                                    <td> 
                                        <!-- <div style="max-width: 150px; max-height: 150px; overflow:hidden">
                                            <img :src="product.image" alt="" class="img-fluid">
                                        </div>     -->
                                    </td>
                                    <td> {{ product.title }} </td>
                                    <td> {{ product.description }} </td>
                                    <!-- <td> 
                                        <span v-if="product.category"> {{ product.category.name }} </span>
                                        <span v-else> {{ product.category_id }} </span>
                                    </td> -->
                                    <!-- <td style="width: 170px">
                                        <router-link :to="{name: 'edit-product', params: {id: product.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                        <a @click.prevent="deleteProduct(product)" href="#" class="btn btn-danger btn-sm">Delete</a>
                                    </td> -->
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No courses found.</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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