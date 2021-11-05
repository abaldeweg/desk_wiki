export default [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'wiki' },
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: () => import('../views/WikiView'),
    props: (route) => ({
      is404: route.params.is404,
    }),
  },
  {
    path: '/wiki/:id',
    name: 'wiki.edit',
    component: () => import('../views/WikiEditView'),
    props: true,
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView'),
  },
  {
    path: '*',
    redirect: { name: 'wiki', params: { is404: true } },
  },
]
