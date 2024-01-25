import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Circles from "./pages/Circles";
import Signin from "./pages/Signin";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Circles" element={<Circles />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="/post/:id" element={<PostPage />} />
          {
            //Default navigating to Home on entry, don't change
          }
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
