'use client';

import { useAppDispatch } from '@/hooks';
import { fetchPhotos } from '@/store/api-actions';
import { useEffect } from 'react';

// %======================== ClientFetcher ========================% //

function ClientFetcher(): null {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return null;
}
export default ClientFetcher;