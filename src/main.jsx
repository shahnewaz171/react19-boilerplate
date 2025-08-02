import { StrictMode, Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';

// router
import router from '@/lib/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
