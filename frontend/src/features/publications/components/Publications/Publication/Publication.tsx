import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { IPublication } from '../../../../../types';
import { apiUrl } from '../../../../../globalConstants.ts';
import { AspectRatio } from '@mui/joy';

interface Props {
  publication: IPublication;
}

const Publication:React.FC<Props> = ({publication}) => {

  let publicationImage;

  if (publication.image) {
    publicationImage = apiUrl +  '/' + publication.image;
  }
  return (
    <Card sx={{ width: 320, margin: '20px 10px',
      padding: '20px',
      boxShadow: 'inset 0 -3em 3em rgb(0 200 0 / 30%), 0 0 0 2px white, 0.3em 0.3em 1em rgb(255 255 255 / 60%)',
    }}>
      <div>
        <Typography level="title-lg">{publication.author}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      {publication.image &&
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={publicationImage}
            srcSet={publicationImage}
            loading="lazy"
            alt={publication.author}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',}}
          />
        </AspectRatio>
      }
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-sm">{publication.message}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Publication;