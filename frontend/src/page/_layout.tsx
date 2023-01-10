import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
}
