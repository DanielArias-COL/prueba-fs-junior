import React from 'react';
import '../styles/footerstyle.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contáctanos</h3>
          <p>Email: contacto@tusitio.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="footer__social">
          <h3>Síguenos</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 TuSitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
