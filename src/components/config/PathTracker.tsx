'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { coreActions } from '@/stores/features/core';
import { useAppDispatch } from '@/hooks/useRedux';

function PathTracker() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(coreActions.setCategoryName(pathname.split('/')[1]));
  }, [pathname, dispatch]);

  return <></>;
}

export default PathTracker;
