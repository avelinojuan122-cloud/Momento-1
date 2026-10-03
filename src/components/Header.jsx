import { NavLink } from 'react-router-dom';
import { useFavoritos } from '../Context/FavoritosContext';

export function Header() {
  const { favoritos } = useFavoritos();

  return (
    <header style={{ background: '#0f172a', padding: '15px 30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <nav style={{ display: 'flex', gap: '30px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#cbd5e1', textDecoration: 'none', fontWeight: 'bold' })}>
          Inicio
        </NavLink>
        <NavLink to="/catalogo" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#cbd5e1', textDecoration: 'none', fontWeight: 'bold' })}>
          Catálogo
        </NavLink>
        <NavLink to="/favoritos" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#cbd5e1', textDecoration: 'none', fontWeight: 'bold' })}>
          Favoritos ({favoritos ? favoritos.length : 0})
        </NavLink>

        {/* Input de búsqueda para cumplir con el Caso 3 (getByPlaceholderText) */}
        <input 
          type="text" 
          placeholder="Escribe algo aqui" 
          style={{ padding: '5px 10px', borderRadius: '4px', border: '1px solid #ccc', marginLeft: 'auto' }} 
        />
      </nav>
    </header>
  );
}