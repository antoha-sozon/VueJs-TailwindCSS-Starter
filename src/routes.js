import Error from './views/404.vue';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Users from './views/Users.vue';
import User from './views/User.vue';
import Events from './views/Events.vue';
import EventEdit from './views/EventEdit.vue';

const routes = [
  { path: '/404', component: Error, name: '404' },
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/users', component: Users },
  { path: '/user/:id', component: User },
  { path: '/events', component: Events },
  { path: '/event/:id', component: EventEdit },
];

export default routes;
