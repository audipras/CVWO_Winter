import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#181818', 
    },
    secondary: {
      main: '#404040', 
    },
    background: {
      default: '#B3B3B3',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 12,
  },  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#808080',
          border: '1px solid #ffffff'
        },
      },
    },
  },
});

export default theme;