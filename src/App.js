import { Route, Routes } from 'react-router-dom';
import './App.css';
import Peliculas from './peliculas';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Peliculas/>}> </Route>
      </Routes>
     
    </div>
  );
}

export default App;
