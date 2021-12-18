import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("../views/Home.vue"),
    },
    {
        path: "/#about",
        name: "about",
        component: () =>
            // import ("../views/About.vue"),
            import ("../views/Home.vue"),
    },
    {
        path: "/#skill",
        name: "skill",
        component: () =>
            // import ("../views/Skill.vue"),
            import ("../views/Home.vue"),
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: () =>
            import ("../views/Portfolio.vue"),
    },
    {
        path: "/#contact",
        name: "contact",
        component: () =>
            // import ("../views/Contact.vue"),
            import ("../views/Home.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;