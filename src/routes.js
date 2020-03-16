import Error from './views/404.vue';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Users from './views/Users.vue';

const routes = [
  { path: '/404', component: Error, name: '404' },
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/user/:id', component: Users },
];

export default routes;