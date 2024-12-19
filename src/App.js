import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import NewsHighlight from "./components/NewsHighlight";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import OzCambioNews from "./pages/OzCambioNews";
import WorldNews from "./pages/WorldNews";
import NewsPage from "./pages/NewsPage";
import useUserIdentifier from "./hooks/useUserIdentifier";

import "./App.css";

const App = () => {
  useUserIdentifier();
  const [rssNews, setRssNews] = useState([]);
  // eslint-disable-next-line
  const [localIPs, setLocalIPs] = useState([]);
  // eslint-disable-next-line
  const [resolvedIPs, setResolvedIPs] = useState([]);

  useEffect(() => {
    const fetchRssNews = async () => {
      try {
        const response = await axios.get("https://api.rss2json.com/v1/api.json", {
          params: { rss_url: "https://br.investing.com/rss/news.rss" },
        });

        const newsItems = response.data.items.map((item) => ({
          title: item.title,
          link: item.link,
          image: item.enclosure?.link || "OZ-CORRETORA.png",
          category: item.categories?.[0] || "Notícia",
          pubDate: new Date(item.pubDate).toLocaleDateString("pt-BR"),
        }));

        setRssNews(newsItems);
      } catch (error) {
        console.error("Erro ao buscar notícias RSS:", error);
      }
    };

    fetchRssNews();
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <Container style={{ marginTop: "80px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewsHighlight />
                <div className="divisor">Notícias</div>
                <Row>
                  {rssNews.map((news, index) => (
                    <Col key={index} md={6} className="mb-5">
                      <NewsCard news={news} />
                    </Col>
                  ))}
                </Row>
              </>
            }
          />
          <Route path="/oznews" element={<OzCambioNews />} />
          <Route path="/mundo" element={<WorldNews />} />
          <Route path="/news_5121" element={<NewsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
