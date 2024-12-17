import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Notícias OZ Cambio</p>
            <p>
              <a href="/privacy-policy">Política de Privacidade</a> |{" "}
              <a href="/terms-of-service">Termos de Serviço</a>
            </p>
            <p>
              Desenvolvido por <a href="https://github.com/Louiz77" target="_blank">OZ Cambio</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;