import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritosProvider } from './Context/FavoritosContext';
import { Layout } from './components/Layout';
import { Inicio } from './Pages/Inicio';
import { Catalogo } from './Pages/Catalogo';
import { Favoritos } from './Pages/Favoritos';
import './App.css';

export function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;