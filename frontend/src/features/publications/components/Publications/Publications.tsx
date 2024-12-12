import Publication from './Publication/Publication.tsx';
import { IPublication } from '../../../../types';
import React from 'react';
import { nanoid } from 'nanoid';
import { Box } from '@mui/material';

interface Props {
  publications: IPublication[];
}

const Publications:React.FC<Props> = ({publications}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
      {publications.map((publication) => {
        const uniqueKey = nanoid();
        return (
          <Publication key={uniqueKey}  publication={publication}/>
        )
      })}
    </Box>
  );
};

export default Publications;