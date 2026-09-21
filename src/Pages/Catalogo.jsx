import { useState } from 'react';
import { useFavoritos } from '../Context/FavoritosContext';

const productosMock = [
  { id: 1, nombre: "Peluche Mascota La'eeb (Catar 2022)", precio: 140000 },
  { id: 2, nombre: 'Peluche Mascota Zabivaka (Rusia 2018)', precio: 120000 },
  { id: 3, nombre: 'Peluche Mascota Fuleco (Brasil 2014)', precio: 160000 },
  { id: 4, nombre: 'Peluche Mascota Zakumi (Sudáfrica 2010)', precio: 110000 },
];

export function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const { toggleFavorito, esFavorito } = useFavoritos();

  const productosFiltrados = productosMock.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Catálogo de Mascotas de los Mundiales</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar mascota..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid-cards">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="card">
            <h3>{producto.nombre}</h3>
            <p>${producto.precio.toLocaleString('es-CO')}</p>
            <button 
              className="btn-primary" 
              onClick={() => toggleFavorito(producto)}
            >
              {esFavorito(producto.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}