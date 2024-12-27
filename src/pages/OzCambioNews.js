import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CustomModal from "../components/CustomModal";

const OzCambioNews = () => {
  // Dados de notícias
  const [showModal, setShowModal] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  // Função para abrir o modal e armazenar o link atual
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
  
  const news = [
    {
      title: "Como a OZ Câmbio pode ajudar com Stock Options?",
      date: "12 dez 2024",
      description:
      "As Stock Options são uma excelente forma de motivar colaboradores, mas, quando há envolvimento de ganhos internacionais, os desafios cambiais podem afetar os resultados financeiros.💼 Com a OZ Câmbio, sua empresa pode:\n✔️ Reduzir custos com taxas competitivas.\n✔️ Contar com segurança e eficiência em transações internacionais.\n✔️ Maximizar os ganhos com estratégias personalizadas.\n📲 Entre em contato agora e descubra como facilitar suas operações financeiras no mercado global!\n🌎",
      image: "1734017302961_pages-to-jpg-0001.jpg",
      category: "STOCK OPTIONS",
      link: "https://www.linkedin.com/posts/oz-cambio_stock-options-activity-7272995746533044226-Su11?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "🚀 Inspiração e inovação no mesmo ambiente!",
      date: "10 dez 2024",
      description:
      "Tivemos a honra de receber 🎯 Paulo Caroli, referência mundial em métodos ágeis e autor do best-seller Lean Inception, em nosso escritório! Durante a visita, ele trouxe insights valiosos sobre como transformar estratégias em entregas ágeis e práticas, conectando inovação e desempenho. 💡✨Essa troca reforça nosso compromisso com a agilidade, a inovação e a colaboração, valores que guiam a OZ Câmbio na entrega das melhores soluções para nossos clientes. 🌟👉 Siga-nos e acompanhe nossa jornada de aprendizado e resultados!",
      image: "1733847655766_page-0001.jpg",
      category: "EMPRESA",
      link: "https://www.linkedin.com/posts/oz-cambio_visita-especial-activity-7272284531523481602-u0a9?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Você já se perguntou o que faz do dólar uma das moedas mais confiáveis ​​do mundo? 🌍",
      date: "8 dez 2024",
      description: "➡️ Ele é aceito globalmente, tem o respaldo da maior economia do mundo e é um refúgio em momentos de crise. Quer saber mais? Confira os detalhes no carrossel! 😉💸 Precisa operar em dólar? A OZ Câmbio está aqui para te ajudar. Fale conosco e aproveite as melhores condições!",
      image: "1733405154388_page-0001.jpg",
      category: "DÓLAR",
      link: "https://www.linkedin.com/posts/oz-cambio_d%C3%B3lar-activity-7270428223040053249-1-7K?utm_source=share&utm_medium=member_desktop",
    },
    {
        title: "✨ A OZ Câmbio no maior palco de gestão e inovação da América Latina: o HSM+ 2024! ✨",
        date: "6 dez 2024",
        description: "Mais de 4 mil participantes, 200 palestrantes incríveis e 100 horas de conteúdo transformador! 🚀 Representados pelo nosso CTPO, Érito, e pela Diretora de Growth, Raissa Florence, estamos conectando tecnologia, inovação e o mercado de câmbio para construir um futuro mais moderno e eficiente. 👉 Siga a OZ e acompanhe como estamos moldando o futuro do câmbio com inovação e propósito!",
        image: "1733253047656_page-0001.jpg",
        category: "HSM+ 2024",
        link: "https://www.linkedin.com/posts/oz-cambio_oz-c%C3%A2mbio-hsm-2024-activity-7269790296123621376-lejM?utm_source=share&utm_medium=member_desktop",
    },
    {
        title: "🌐 Nosso CEO, Rodrigo Xavier , participou do programa “The New Tech World Program”",
        date: "30 nov 2024",
        description: "Promovido por INSEAD e Visa Direct, para explorar o impacto transformador da Inteligência Artificial nos pagamentos internacionais. Mais um passo da Oz rumo à inovação e segurança para nossos clientes. 🚀 Quer saber mais sobre nossa visão de futuro nos pagamentos globais? Siga-nos e conecte-se com Rodrigo!",
        image: "1732635567246_page-0001.jpg",
        category: "INTELIGÊNCIA ARTIFICIAL",
        link: "https://www.linkedin.com/posts/oz-cambio_futuro-dos-pagamentos-activity-7267200380600492032-H36x?utm_source=share&utm_medium=member_desktop",
    },
  ];

  // Dados dos destaques
  const highlights = [
    {
        title: "🔴 URGENTE: Regulamentação da Receita Federal pode impactar operações de câmbio",
        description: "Um novo projeto de lei pode afetar diretamente transferências internacionais e operações de câmbio comercial. Entenda como as mudanças podem impactar empresas e clientes da OZ Câmbio.",
        image: "/receitafederal.png",
        link: "/news_5121"
    },
  ];

  return (
    <Container style={{ marginTop: "40px" }}>
      <Row>
        {/* Coluna Esquerda - Notícias */}
        <Col md={8}>
          {news.map((item, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    className="h-100 w-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-success">
                      {item.category}
                    </Card.Subtitle>
                    <Card.Title>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{  color: "#092240" }}>{item.title}</a>
                    </Card.Title>
                    <Card.Text>
                      <small className="text-muted">{item.date}</small>
                    </Card.Text>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                        {item.description}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>

        {/* Coluna Direita - Destaques */}
        <Col md={4}>
          <h5 className="mb-3 font-italic">DESTAQUES</h5>
          {highlights.map((highlight, index) => (
            <Card key={index} className="mb-3">
              {highlight.image && (
                <Card.Img 
                variant="top"
                src={highlight.image}
                alt="Destaque" />
              )}
              <Card.Body>
                <Card.Title className="h6">{highlight.title}</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {highlight.description}
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button
                    variant="dark"
                    size="sm"
                    onClick={() => handleShowModal(highlight.link)}>
                        Leia a matéria completa
                    </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          <Card>
            <Card.Body>
                <Card.Title className="h6">Receba mais informações da OZ Câmbio pelo nosso Linkedin</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                Siga para receber informações atualizadas diretamente.
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="sm" href="https://www.linkedin.com/company/oz-cambio" target="_blank" rel="noopener noreferrer">
                        Siga-nos!
                    </Button>
                </div>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    {/* Modal */}
    <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        handleProceed={handleProceed}
      />
    </Container>
  );
};

export default OzCambioNews;
