import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Category from '@/views/Category.vue';
import Form from '@/views/Form.vue';
import Lesson from '@/views/Lesson.vue';
import AddCourse from '@/views/AddCourse.vue';

const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

     {
        path: '/course',
        name: 'course',
        component: About,
    },
     
    {
        path: '/add-course',
        name: 'add-course',
        component:AddCourse,
    },
        
     {
        path: '/category',
        name: 'category',
        component: Category,
    }, 
     
      {
        path: '/add-category',
        name: 'add-category',
        component: Form,
    }, 

     {
        path: '/lesson',
        name: 'lesson',
        component: Lesson,
    }, 
   
 
];

const router = createRouter({
   history: createWebHistory(),
    routes,

});






export default router;