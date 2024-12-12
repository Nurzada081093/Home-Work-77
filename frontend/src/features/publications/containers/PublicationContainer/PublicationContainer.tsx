import ToolBar from '../../../../components/UI/ToolBar/ToolBar.tsx';
import ModalWindow from '../../../../components/UI/ModalWindow/ModalWindow.tsx';
import { Container } from '@mui/material';
import Loading from '../../../../components/UI/Loadings/Loading/Loading.tsx';
import Publications from '../../components/Publications/Publications.tsx';
import Typography from '@mui/joy/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks.ts';
import { allPublicationsSlice, getLoadingSlice } from '../../publicationsSlice.ts';
import { getPublications, postPublication } from '../../publicationsThunk.ts';
import { IPublication } from '../../../../types';
import { toast } from 'react-toastify';

const PublicationContainer = () => {
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
    await dispatch(getPublications());
    toast.success('Publication has been successfully added!');
  };

  const getAllPublications = useCallback(async () => {
    await dispatch(getPublications());
  }, [dispatch]);

  useEffect(() => {
    void getAllPublications();
  }, [dispatch]);

  return (
    <>
      <header>
        <ToolBar openModal={openModal}/>
      </header>
      <ModalWindow openModal={open} closeModal={closeModal} addPublication={addPublication}/>
      <Container sx={{marginTop: '50px'}}>
        {getLoading ? <Loading/> :
          (publications.length > 0 ? <Publications publications={publications}/> :
              <Typography sx={{fontSize: '30px', marginLeft: '20px auto', textAlign: 'center'}}>Publications no
                yet!</Typography>
          )
        }
      </Container>
    </>
  );
};

export default PublicationContainer;