import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { FavoritosProvider } from '../Context/FavoritosContext';

test('Caso 3: Encuentra los enlaces de navegación reales', () => {
  render(
    <FavoritosProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </FavoritosProvider>
  );

  const enlaceCatalogo = screen.getByText(/Catálogo/i);
  expect(enlaceCatalogo).toBeInTheDocument();
});