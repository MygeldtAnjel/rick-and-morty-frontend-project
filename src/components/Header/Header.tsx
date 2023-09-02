import { AppBar, Toolbar, Typography,Container } from '@mui/material';

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rick And Morty Humans Project
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;