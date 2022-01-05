import HelloWorld from '../views/HelloWorld.vue';

const AppBarConfig = [
  {
    name: 'HelloWorld',
    path: '/',
    component: HelloWorld,
    title: 'Home',
  },
  {
    name: 'Covid',
    path: '/Covid',
    component: () => import('../views/covid/Covid.vue'),
    title: 'Covid-19',
  },
  {
    name: 'Form',
    path: '/Form',
    component: () => import('../views/Form.vue'),
    title: 'Form',
  },
];

export default AppBarConfig;