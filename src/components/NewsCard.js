import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = ({ news }) => {
  if (!news) return null;
  const { title, link, image, category, pubDate } = news;

  return (
    <Card className="news-card">
      <Card.Img variant="top" src={image} alt="Imagem da notícia" />
      <Card.Body>
        <Card.Title>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#092240" }}>
            {title}
          </a>
        </Card.Title>
        <Card.Text>
          <small className="text-muted">
            {pubDate} - {category}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;