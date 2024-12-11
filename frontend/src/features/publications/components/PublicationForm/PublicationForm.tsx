import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { IPublication } from '../../../../types';
import { Textarea } from '@mui/joy';
import * as React from 'react';
import FileFormInput from '../../../../components/FileFormInput/FileFormInput.tsx';
import { toast } from 'react-toastify';

const initialPublication = {
  message: '',
  author: '',
  image: '',
}

const PublicationForm = () => {
  const [newPublication, setNewPublication] = useState<IPublication>(initialPublication);

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPublication.message.trim().length > 0) {
      console.log(newPublication);
      toast.success('Publication has been successfully added!');
    } else {
      toast.error('If you want to write a publication, you should fill out the message!');
    }
  };

  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setNewPublication((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files) {
      setNewPublication(prevState => ({
        ...prevState,
        [name]: files[0] || null,
      }))
    }
  };

  return (
    <form onSubmit={onSubmit} style={{
      margin: '20px 10px',
      padding: '20px 10px',
    }}>
      <Grid container spacing={2} sx={{mx: 'auto', width: '80%'}}>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Author"
            name="author"
            variant="outlined"
            value={newPublication.author}
            onChange={onChange}
            type="text"
          />
        </Grid>
        <Grid size={12}>
          <Textarea
            id="outlined-basic"
            variant="outlined"
            placeholder="Message..."
            minRows={5}
            value={newPublication.message}
            name="message"
            onChange={onChange}
          />
        </Grid>
        <Grid size={12}>
          <FileFormInput
            getImage={getImage}
            label="Image"
            name="image"
          />
        </Grid>
        <Grid size={12}>
          <Button
            sx={{width: '100%'}} variant="contained"
            type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PublicationForm;