import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "./components/LogIn.vue"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"




const router = createRouter({
    history: createWebHistory(),
     routes: [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/log-in",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/add",
        name: "Add",
        component: Add,
    },
    {
        path: "/update/:id",
        name: "Update",
        component: Update,
    },
]


});

export default router;