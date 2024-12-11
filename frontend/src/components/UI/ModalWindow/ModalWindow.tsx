import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import React from 'react';
import PublicationForm from '../../../features/publications/components/PublicationForm/PublicationForm.tsx';
import { ModalClose } from '@mui/joy';

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

const ModalWindow:React.FC<Props> = ({openModal, closeModal}) => {

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openModal}
        onClose={closeModal}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <PublicationForm/>
        </Sheet>
      </Modal>
    </>
  );
};

export default ModalWindow;