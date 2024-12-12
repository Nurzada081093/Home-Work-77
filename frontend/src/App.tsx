import Publications from './features/publications/components/Publications/Publications.tsx';
import { useCallback, useEffect, useState } from 'react';
import ModalWindow from './components/UI/ModalWindow/ModalWindow.tsx';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { allPublicationsSlice, getLoadingSlice } from './features/publications/publicationsSlice.ts';
import { getPublications, postPublication } from './features/publications/publicationsThunk.ts';
import { Box, Container } from '@mui/material';
import Loading from './components/UI/Loadings/Loading/Loading.tsx';
import Typography from '@mui/joy/Typography';
import { toast } from 'react-toastify';
import { IPublication } from './types';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const publications = useAppSelector(allPublicationsSlice);
  const getLoading = useAppSelector(getLoadingSlice);
  const dispatch = useAppDispatch();

  const openModal = () => setOpen(true);

  const closeModal = async () => {
    await dispatch(getPublications());
    setOpen(false)
  };

  const addPublication = async (publication: IPublication) => {
    await dispatch(postPublication(publication));
    toast.success('Publication has been successfully added!');
  };

  const getAllPublications = useCallback(async () => {
    await dispatch(getPublications());
  }, [dispatch]);

  useEffect(() => {
    void getAllPublications();
  }, [dispatch]);

  return (
    <Box>
      <header>
        <ToolBar openModal={openModal}/>
      </header>
      <ModalWindow openModal={open} closeModal={closeModal} addPublication={addPublication}/>
      <Container sx={{marginTop: '50px'}}>
        {getLoading ? <Loading/> :
          (publications.length > 0 ? <Publications publications={publications}/> :
            <Typography sx={{fontSize: '30px', marginLeft: '20px auto', textAlign: 'center'}}>Publications no yet!</Typography>
          )
        }
      </Container>
    </Box>
  )
};

export default App;
