import ConfigurePage from '../pages/ConfigurePage';
import ProfilePage from '../pages/ProfilePage';


const routes = [
  {
    path: '/configure',
    title: 'Configure ',
    exact: true,
    component: ConfigurePage,
  },
  {
    path: '/profile',
    title: 'Profile',
    exact: true,
    component: ProfilePage,
  },
];

export default routes;
