import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { FavoritosProvider } from '../Context/FavoritosContext';

test('Caso 2: Encuentra el contador de favoritos actualizado', async () => {
  render(
    <FavoritosProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </FavoritosProvider>
  );

  const contador = await screen.findByText(/Favoritos \(0\)/i);
  expect(contador).toBeInTheDocument();
});