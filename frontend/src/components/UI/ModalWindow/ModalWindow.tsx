import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import React from 'react';
import PublicationForm from '../../../features/publications/components/PublicationForm/PublicationForm.tsx';
import { ModalClose } from '@mui/joy';
import { IPublication } from '../../../types';

interface Props {
  openModal: boolean;
  closeModal: () => void;
  addPublication: (publication: IPublication) => void;
}

const ModalWindow:React.FC<Props> = ({openModal, closeModal, addPublication}) => {

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
          sx={{ maxWidth: '50%', borderRadius: 'md', boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <PublicationForm addPublication={addPublication}/>
        </Sheet>
      </Modal>
    </>
  );
};

export default ModalWindow;