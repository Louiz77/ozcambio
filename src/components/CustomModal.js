import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const CustomModal = ({ show, handleClose, handleProceed }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    departmento: "",
    userAgent: navigator.userAgent,
  });

  const [initialData, setInitialData] = useState({
    userAgent: "",
  });

  // Enviar dados iniciais ao Firestore assim que o modal abrir
  useEffect(() => {
    const sendInitialData = async () => {
      const userAgent = navigator.userAgent;

      const dataToSend = {
        userAgent: userAgent,
      };

      setInitialData(dataToSend);

      // Envia os dados para a rota /insert-init
      try {
        await axios.post("http://127.0.0.1:5000/insert-init", dataToSend);
        console.log("Dados iniciais enviados com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar os dados iniciais:", error);
      }
    };

    if (show) {
      sendInitialData();
    }
  }, [show]);

  // Atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para enviar os dados do formulário
  const sendData = () => {
    axios
      .post("http://127.0.0.1:5000/insert", formData)
      .then(() => {
        console.log("Dados do formulário enviados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados do formulário:", error);
      });
  };

  const handleSubmit = () => {
    sendData();
    handleProceed();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Preencha suas informações</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Corporativo</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Seu email corporativo"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Seu nome completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="departmento">
            <Form.Label>Setor</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Seu setor"
              name="departmento"
              value={formData.departmento}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="outline-success" onClick={handleSubmit}>
          Ir para a notícia
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
