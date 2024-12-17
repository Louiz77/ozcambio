import React, { useState } from "react";
import { Card, Badge, Button, Row, Col } from "react-bootstrap";
import CustomModal from "../components/CustomModal";

const NewsHighlight = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  // Função para abrir o modal e armazenar o link
  const handleShowModal = (link) => {
    setCurrentLink(link);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentLink("");
  };

  // Função para prosseguir ao link
  const handleProceed = () => {
    window.open(currentLink, "_blank");
    handleCloseModal();
  };

  return (
    <Row className="justify-content-center" style={{ marginBottom: "80px" }}>
      <Col md={6}>
        <Card className="news-highlight-card shadow-lg">
          <Card.Img
            variant="top"
            src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bolsa-queda-indices-mercados.jpg?fit=900%2C506&quality=70&strip=all"
            alt="Imagem da Notícia Fake"
          />
          <Card.Body className="text-center position-relative">
            <Badge pill bg="danger" className="position-absolute top-0 start-0 m-2 fs-6">
              Economia
            </Badge>
            <Badge pill bg="primary" className="position-absolute top-0 end-0 m-2 fs-6">
              Atualizado
            </Badge>
            <h2 className="news-title mt-3">Dólar atinge marca de R$9,06 e surpreende mercado financeiro</h2>
            <Card.Text className="news-description text-muted my-3">
              A alta do dólar continua pressionando os mercados, gerando dúvidas sobre a estabilidade econômica para os
              próximos meses. Entenda o impacto disso no mercado nacional.
            </Card.Text>
            <Button
              variant="dark"
              className="fw-bold"
              onClick={() => handleShowModal("/")}
            >
              Leia a matéria completa
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal */}
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        handleProceed={handleProceed}
      />
    </Row>
  );
};

export default NewsHighlight;