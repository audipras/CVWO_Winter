import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Your primary color
    },
    secondary: {
      main: '#ff4081', // Your secondary color
    },
    background: {
      default: '#808080', // Set the default background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
});

export default theme;