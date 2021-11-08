import Registration from './components/registration/Registration.vue';
import Home from './components/home/Home.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/registration', component: Registration}
];