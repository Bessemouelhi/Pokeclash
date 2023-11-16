import logo from './logo.svg';
import './App.css';
import PokemonList from './component/PokemonList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPokemon from './SelectPokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectPokemon />} />
        <Route path="/fight" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
