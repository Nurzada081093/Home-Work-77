import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface Props {
  openModal: () => void;
}

const ToolBar:React.FC<Props> = ({openModal}) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#263238'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Publications
            </Typography>
            <Button color="inherit" sx={{color: 'inherit', '&.active': {fontSize: '20px'}}} onClick={openModal}>Add new publication</Button>
            <IconButton color="inherit" sx={{marginLeft: '20px'}}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;