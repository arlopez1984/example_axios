import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Character from "./Pages/Character";
import Botones from './componentes/Botones';
import DataUser from "./Pages/DataUser";
import People from "./componentes/People";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/character/:id" element={<Character/>}></Route>
          <Route path="/botones" element={<Botones/>}></Route>
          <Route path="/users/:id" element={<DataUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
