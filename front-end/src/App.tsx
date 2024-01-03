import Signin from "./pages/Signin";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
}

export default App;
