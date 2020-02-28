export default [
  {
    path: '/login',
    loader: () => import('@views/login'),
    permission: false
  },
  {
    path: '/',
    loader: () => import('@views/home'),
    exact: true,
    permission: true
  },
  {
    path: '/test',
    loader: () => import('@views/test'),
    permission: true
  }
];
