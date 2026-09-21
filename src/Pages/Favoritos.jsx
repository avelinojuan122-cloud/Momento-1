import { useFavoritos } from '../Context/FavoritosContext';

export function Favoritos() {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div className="container">
      <h2>Mis Productos Favoritos</h2>
      {favoritos.length === 0 ? (
        <p style={{ color: '#6b7280' }}>No tienes productos guardados en favoritos.</p>
      ) : (
        <div className="grid-cards">
          {favoritos.map((producto) => (
            <div key={producto.id} className="card">
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toLocaleString('es-CO')}</p>
              <button 
                className="btn-danger" 
                onClick={() => toggleFavorito(producto)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}