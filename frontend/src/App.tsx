import Publications from './features/publications/components/Publications/Publications.tsx';
import { useCallback, useEffect, useState } from 'react';
import ModalWindow from './components/UI/ModalWindow/ModalWindow.tsx';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { allPublicationsSlice } from './features/publications/publicationsSlice.ts';
import { getPublications } from './features/publications/publicationsThunk.ts';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const publications = useAppSelector(allPublicationsSlice);
  const dispatch = useAppDispatch();

  const openModal = () => setOpen(true);
  const closeModal = async () => {
    setOpen(false);
    await dispatch(getPublications());
  }

  const getAllPublications = useCallback(async () => {
    await dispatch(getPublications());
  }, [dispatch]);

  useEffect(() => {
    void getAllPublications();
  }, [getAllPublications]);

  console.log(publications);


  return (
    <>
      <header>
        <ToolBar openModal={openModal} />
      </header>
      <ModalWindow openModal={open} closeModal={closeModal}/>
      <Publications/>
    </>
  )
};

export default App;
