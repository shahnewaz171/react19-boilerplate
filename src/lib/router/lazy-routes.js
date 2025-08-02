import { lazy } from 'react';

const lazyRoutes = {
  layouts: {
    Private: lazy(() => import('@/layouts/PrivateLayout')),
    Public: lazy(() => import('@/layouts/PublicLayout'))
  },
  pages: {
    Login: lazy(() => import('@/pages/Login')),
    Register: lazy(() => import('@/pages/Register')),
    Home: lazy(() => import('@/pages/Home')),
    NotFound: lazy(() => import('@/pages/NotFound'))
  },
  core: {
    ErrorBoundary: lazy(() => import('@/components/core/ErrorBoundary'))
  }
};

export default lazyRoutes;
