import  HeroSection  from '../components/HeroSection';

export function Inicio() {
  return (
    <div className="container">
      <HeroSection />
      <h1 style={{ color: '#1f2937' }}>Bienvenido</h1>
      <p>Explora nuestro catálogo para descubrir productos.</p>
    </div>
  );
}