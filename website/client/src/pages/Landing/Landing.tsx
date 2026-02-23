import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Card from '../../components/atoms/Card';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Hero — parallax background */}
      <section className="landing__hero">
        <div className="landing__hero-overlay" />
        <div className="landing__hero-content">
          <h1 className="landing__title">
            El café que Guatemala<br />merece en tu mesa
          </h1>
          <p className="landing__subtitle">
            Seleccionamos los granos más finos de las tierras altas guatemaltecas
            para ofrecerte una experiencia única en cada taza.
          </p>
          <Button variant="primary" size="lg" className="landing__hero-cta" onClick={() => navigate('/catalogo')}>
            Ver Catálogo
          </Button>
        </div>
      </section>

      {/* Services preview */}
      <section className="landing__services">
        <div className="landing__services-inner">
          <h2 className="landing__section-title">Nuestros Servicios</h2>
          <div className="landing__services-grid">
            <Card className="landing__service-card" padding="0px">
              <div className="landing__service-img-wrap">
                <img src="/assets/01_soluble.jpeg" alt="Café Soluble" />
              </div>
              <div className="landing__service-body">
                <h3>Café Soluble</h3>
                <p>Practicidad sin sacrificar el sabor auténtico. Listo en segundos.</p>
              </div>
            </Card>
            <Card className="landing__service-card" padding="0px">
              <div className="landing__service-img-wrap">
                <img src="/assets/01_grano.webp" alt="Café en Grano" />
              </div>
              <div className="landing__service-body">
                <h3>Café en Grano al Gusto</h3>
                <p>Granos selectos tostados artesanalmente, preparados a tu preferencia.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features — parallax */}
      <section className="landing__parallax-mid">
        <div className="landing__parallax-mid-overlay" />
        <div className="landing__features-content">
          <h2>¿Por qué QuetzalDev?</h2>
          <div className="landing__features-grid">
            <Card className="landing__feature" padding="28px">
              <div className="landing__feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>100% Orgánico</h3>
              <p>Cultivado sin pesticidas ni químicos, respetando la tierra y el medio ambiente.</p>
            </Card>
            <Card className="landing__feature" padding="28px">
              <div className="landing__feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h3>Café de Altura</h3>
              <p>Nuestros granos crecen a más de 1,500 metros sobre el nivel del mar.</p>
            </Card>
            <Card className="landing__feature" padding="28px">
              <div className="landing__feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Comercio Justo</h3>
              <p>Trabajamos directamente con agricultores locales, garantizando precios justos.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="landing__bottom-cta">
        <div className="landing__bottom-inner">
          <Card className="landing__bottom-card" padding="48px">
            <h2>¿Listo para probar el mejor café?</h2>
            <p>Explora nuestro catálogo y haz tu pedido hoy mismo.</p>
            <Button variant="primary" size="lg" onClick={() => navigate('/catalogo')}>
              Explorar Catálogo
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
