import HelloWorld from '../components/HelloWorld.vue';

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
    component: () => import('../components/covid/Covid.vue'),
    title: 'Covid-19',
  },
];

export default AppBarConfig;