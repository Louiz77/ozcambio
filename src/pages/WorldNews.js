import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Card, Button } from "react-bootstrap";
import "./WorldNews.css";
import CustomModal from "../components/CustomModal";

const WorldNews = () => {
  const [rssNews, setRssNews] = useState([]);

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

  const fetchRssNews = async () => {
    try {
      const response = await axios.get("https://api.rss2json.com/v1/api.json", {
        params: { rss_url: "https://g1.globo.com/dynamo/economia/rss2.xml" },
      });
  
      const newsItems = response.data.items.map((item) => {
        // Remove tags <img> e outros HTML da descrição
        const cleanDescription = item.description.replace(/<img[^>]*>/g, "").replace(/<[^>]+>/g, "");
        
        // Trunca a descrição para 100 caracteres
        const shortDescription = cleanDescription.length > 300 
          ? cleanDescription.slice(0, 300) + "..." 
          : cleanDescription;
  
        return {
          title: item.title,
          link: item.link,
          image: item.enclosure?.link || "OZ-CORRETORA.png",
          category: item.categories?.[0] || "Notícia",
          description: shortDescription,
          pubDate: new Date(item.pubDate).toLocaleDateString("pt-BR"),
        };
      });
  
      setRssNews(newsItems);
    } catch (error) {
      console.error("Erro ao buscar notícias RSS:", error);
    }
  };

  useEffect(() => {
    fetchRssNews();
  }, []);

  const highlights = [
    {
        title: "🔴 URGENTE: Regulamentação da Receita Federal pode impactar operações de câmbio",
        description: "Um novo projeto de lei pode afetar diretamente transferências internacionais e operações de câmbio comercial. Entenda como as mudanças podem impactar empresas e clientes da OZ Câmbio.",
        image: "/receitafederal.png",
        link: "/news_5121"
    },
  ];

  return (
    <div className="world-news-container">
      <div className="world-news-content">
        {/* Coluna Esquerda - Notícias do RSS */}
        <div className="news-column left-column">
          <h2 className="text-center m-2">Notícias do Dia</h2>
          {rssNews.length > 0 ? (
            rssNews.map((news, index) => (
              <div key={index} className="news-item">
                <img
                  src={news.image}
                  alt={news.title}
                  className="news-image"
                />
                <div className="news-details mb-2">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-category">{news.category}</p>
                  <p className="news-date">{news.pubDate}</p>
                  <p>{news.description}</p>
                  <div className="d-grid gap-2">
                    <Button
                        variant="outline-dark"
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                        >
                        Leia mais
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando notícias...</p>
          )}
        </div>

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
      {/* Modal */}
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        handleProceed={handleProceed}
      />
      </div>
    </div>
  );
};

export default WorldNews;