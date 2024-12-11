import Publications from './features/publications/components/Publications/Publications.tsx';
import { useState } from 'react';
import ModalWindow from './components/UI/ModalWindow/ModalWindow.tsx';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

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
