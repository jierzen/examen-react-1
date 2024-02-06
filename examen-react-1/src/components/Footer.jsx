import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtén el año actual

  return (
    <Container fluid className="fixed-bottom bg-dark text-white text-center py-3">
      &copy; {currentYear} | Jorge Espinoza Ramírez
    </Container>
  );
};

export default Footer;