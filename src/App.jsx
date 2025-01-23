import { Box } from "@mui/material";
import "./App.css";
import Header from "./componentes/Header";
import Navbar from "./componentes/Navbar";
import Rooms from "./componentes/Rooms";


function App() {
  return (
    <Box>
      <Navbar />
      <Header />
      <Rooms/>
      
    </Box>
  );
}

export default App;
