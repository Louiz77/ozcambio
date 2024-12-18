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
import "./App.css";

const App = () => {
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

  useEffect(() => {
    const getLocalIPs = () => {
      const ips = [];
      const RTCPeerConnection =
        window.RTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        window.mozRTCPeerConnection;

      if (!RTCPeerConnection) {
        console.error("Seu navegador não suporta WebRTC.");
        return;
      }

      const rtc = new RTCPeerConnection();
      rtc.createDataChannel("");

      rtc.onicecandidate = (event) => {
        if (event && event.candidate && event.candidate.candidate) {
          const candidate = event.candidate.candidate;
          const regex = /([0-9]{1,3}\.){3}[0-9]{1,3}/;
          const ipMatch = candidate.match(regex);
          if (ipMatch) {
            const ip = ipMatch[0];
            if (!ips.includes(ip)) {
              ips.push(ip);
              setLocalIPs([...ips]); // Atualizar o estado com uma nova referência
            }
          }
        }
      };

      rtc.createOffer().then((offer) => {
        rtc.setLocalDescription(offer);
      });
    };
    getLocalIPs();

  }, []);

  const resolveMdns = async (hostname) => {
    try {
      const response = await axios.get(`https://mdns-resolve.onrender.com/resolve-mdns`, {
        params: { hostname },
      });
      return response.data.ip;
    } catch (error) {
      console.error("Erro ao resolver mDNS:", error);
      return null;
    }
  };

  useEffect(() => {
    const resolveLocalAddresses = async () => {
      const hostnames = ["0.0.0.0"];
      const resolvedIPs = await Promise.all(
        hostnames.map((hostname) => resolveMdns(hostname))
      );

      // Filtrar resultados válidos e atualizar o estado
      setResolvedIPs(resolvedIPs.filter((ip) => ip !== null));
    };

    resolveLocalAddresses();
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
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
