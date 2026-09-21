import { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
    setFavoritos((prev) => {
      const existe = prev.some((item) => item.id === producto.id);
      if (existe) {
        return prev.filter((item) => item.id !== producto.id);
      } else {
        return [...prev, producto];
      }
    });
  };

  const esFavorito = (id) => favoritos.some((item) => item.id === id);

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, esFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);