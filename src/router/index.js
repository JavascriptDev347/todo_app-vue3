import {
    createRouter,
    createWebHistory
} from 'vue-router'
import TheMain from "@/view/TheMain.vue";
import TheHome from "@/view/TheHome.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: TheMain
        },
        {
            path: "/home",
            component: TheHome
        }
    ]
})

export default router