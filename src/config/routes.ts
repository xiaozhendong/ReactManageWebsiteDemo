import {lazy} from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import ManageLayout from '@/layouts/ManageLayout';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routerConfig = [
  {
    path: '/login',
    component: BasicLayout,
    children: [{component: Login }],

  },
  {
    path: '/NotFound',
    component: BasicLayout,
    children: [
      { component: NotFound },
    ],
  },


  {
    path: '/',
    component: ManageLayout,
    children: [

      {
        path: '/index',
        component: Home,

      },

      {
        redirect: '/NotFound',
      }
    ],
  },

];

export default routerConfig;
