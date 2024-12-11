import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../axiosRequest.ts';
import { IPublication } from '../../types';

export const postPublication = createAsyncThunk<void, IPublication>(
  'publications/postPublication',
  async (publication) => {
    const formData = new FormData();

    const keys = Object.keys(publication) as (keyof IPublication)[];

    keys.forEach((key) => {
      const value = publication[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });

    await axiosRequest.post('/publications', formData);
  }
);

export const getPublications = createAsyncThunk<IPublication[], void>(
  'publications/getPublications',
  async () => {
    const response = await axiosRequest<IPublication[]>('/publications');
    return response.data || [];
  }
);