import { Route, Routes } from 'react-router-dom';
import './App.css';
import Peliculas from './peliculas';
import UncontrolledExample from './carrusel'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Peliculas/>}> </Route>
        <Route path="carrusel" element={< UncontrolledExample/>}> </Route>
      </Routes>
     
    </div>
  );
}

export default App;
