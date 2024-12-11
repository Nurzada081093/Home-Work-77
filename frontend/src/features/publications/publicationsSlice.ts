import {createSlice} from '@reduxjs/toolkit';
import {IPublication} from '../../types';
import { getPublications, postPublication } from './publicationsThunk.ts';
import { RootState } from '../../app/store.ts';

interface initialPublication {
  publications: IPublication[];
  loadings: {
    postLoading: boolean;
    getLoading: boolean;
    };
  error: boolean;
}

const initialState: initialPublication = {
  publications: [],
  loadings: {
    postLoading: false,
    getLoading: false,
  },
  error: false,
}

export const allPublicationsSlice = (state: RootState) => state.publications.publications;

const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPublication.pending, (state) => {
        state.loadings.postLoading = true;
        state.error = false;
      })
      .addCase(postPublication.fulfilled, (state) => {
        state.loadings.postLoading = false;
        state.error = false;
      })
      .addCase(postPublication.rejected, (state) => {
        state.loadings.postLoading = false;
        state.error = true;
      })
      .addCase(getPublications.pending, (state) => {
        state.loadings.getLoading = true;
        state.error = false;
      })
      .addCase(getPublications.fulfilled, (state, {payload: publications}) => {
        state.loadings.getLoading = false;
        state.error = false;
        state.publications = publications;
      })
      .addCase(getPublications.rejected, (state) => {
        state.loadings.getLoading = false;
        state.error = true;
      });
  }
});

export const publicationsReducer = publicationsSlice.reducer;



