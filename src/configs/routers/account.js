export default [
  {
    path: '/group',
    loader: () => import('@views/account/group'),
    permission: true
  },
  {
    path: '/user',
    loader: () => import('@views/account/user'),
    permission: true
  },
  {
    path: '/role',
    loader: () => import('@views/account/role'),
    permission: true
  },
  {
    path: '/message',
    loader: () => import('@views/account/message'),
    permission: true
  }
];
