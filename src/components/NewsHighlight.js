import React, { useState } from "react";
import { Card, Badge, Button, Row, Col } from "react-bootstrap";
import CustomModal from "../components/CustomModal";

const NewsHighlight = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  const handleShowModal = (link) => {
    setCurrentLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentLink("");
  };

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
            src="/receitafederal.png"
            alt="Imagem da Notícia Fake"
          />
          <Card.Body className="text-center position-relative">
            <Badge pill bg="danger" className="position-absolute top-0 start-0 m-2 fs-6">
              Economia
            </Badge>
            <Badge pill bg="primary" className="position-absolute top-0 end-0 m-2 fs-6">
              Atualizado
            </Badge>
            <h2 className="news-title mt-4">🔴 URGENTE: Regulamentação da Receita Federal pode impactar operações de câmbio</h2>
            <Card.Text className="news-description text-muted my-3">
            Um novo projeto de lei pode afetar diretamente transferências internacionais e operações de câmbio comercial.
            Entenda como as mudanças podem impactar empresas e clientes da OZ Câmbio.
            </Card.Text>
            <Button
              variant="dark"
              className="fw-bold"
              onClick={() => handleShowModal("/news_5121")}
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