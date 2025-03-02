import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import AboutPage from "../views/About.vue";
import LessonsPage from "../views/Lessons.vue";
import LevelsPage from "../views/Level.vue"; // ✅ Level selection page
import LessonVideoPage from "../views/LessonVideo.vue"; // ✅ New Lesson Video page
import ContactPage from "../views/Contact.vue";
import ReviewsPage from "../views/Reviews.vue";
import FAQPage from "../views/FAQ.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/signup", component: SignUp },
  { path: "/login", component: LogIn },
  { path: "/about", component: AboutPage },
  { path: "/lessons", component: LessonsPage },
  { 
    path: "/levels/:instrument", 
    name: "Levels",
    component: LevelsPage,
    props: true // Pass instrument as a prop
  },
  { 
    path: "/lesson/:instrument/:level", 
    name: "LessonVideo",
    component: LessonVideoPage,
    props: true // Pass instrument & level as props
  },
  { path: "/contact", component: ContactPage },
  { path: "/reviews", component: ReviewsPage },
  { path: "/faq", component: FAQPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
