import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { FavoritosProvider } from '../Context/FavoritosContext';

test('Caso 1: Renderiza el Header envolviendo Context y Router', () => {
  render(
    <FavoritosProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </FavoritosProvider>
  );

  expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
});