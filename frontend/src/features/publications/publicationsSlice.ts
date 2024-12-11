import {createSlice} from '@reduxjs/toolkit';
import {IPublication} from '../../types';

interface initialPublication {
  publications: IPublication[];
  loadings: {
    postLoading: boolean;
    getLoading: boolean;
    };
  errors: boolean;
}

const initialState: initialPublication = {
  publications: [],
  loadings: {
    postLoading: false,
    getLoading: false,
  },
  errors: false,
}

const publicationsSlice = createSlice({
    name: 'publications',
    initialState,
    reducers: {}
});

export const publicationsReducer = publicationsSlice.reducer;



