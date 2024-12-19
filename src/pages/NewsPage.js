import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./NewsPage.css";

const NewsPage = () => {
  return (
    <Container fluid className="news-page">
      <Row className="justify-content-center text-center mt-5">
        <Col lg={10}>
          <h1 className="news-title_fake mb-2">
            🔴 URGENTE: Regulamentação da Receita Federal pode impactar operações de câmbio
          </h1>
          <p className="news-subtitle">
            Entenda como esta mudança impactará transferências internacionais, operações comerciais e muito mais.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <img
            src="/receita-federal.jpg"
            alt="Ilustração da notícia"
            className="w-100"
            style={{borderRadius: '25px'}}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <section className="news-content">
            <h2 className="section-title">O Contexto da Nova Regulamentação</h2>
            <p>
              Um novo projeto de lei proposto pela Receita Federal está causando preocupação no setor de câmbio. 
              A proposta visa aumentar a fiscalização sobre transferências internacionais, adicionando novas taxas 
              e limites às operações comerciais realizadas por empresas como a OZ Corretora.
            </p>
            <p>
              Especialistas afirmam que, caso a regulamentação seja aprovada, 
              haverá um impacto direto no envio e recebimento de recursos, podendo elevar custos operacionais 
              para pequenas e grandes empresas.
            </p>
          </section>

          <section className="news-content">
            <h2 className="section-title">Impactos para Pessoas Físicas</h2>
            <p>
              Além das empresas, pessoas físicas que utilizam serviços de câmbio para viagens ou compras internacionais 
              também podem ser impactadas. Entre os principais pontos da proposta estão:
            </p>
            <ul>
              <li>Taxas adicionais para compras em moeda estrangeira.</li>
              <li>Redução do limite anual para transferências pessoais.</li>
              <li>Maior burocracia para aprovar transações de alto valor.</li>
            </ul>
          </section>

          <section className="news-content">
            <h2 className="section-title">O Que Dizem os Especialistas</h2>
            <p>
              De acordo com economistas consultados, a regulamentação pode desestimular operações internacionais, 
              prejudicando o crescimento econômico e dificultando negociações com parceiros estrangeiros.  
            </p>
            <blockquote className="blockquote">
              "É fundamental que as empresas do setor de câmbio se preparem para possíveis mudanças no mercado, buscando 
              estratégias para mitigar os impactos financeiros e operacionais." - Dr. João Silva, economista-chefe.
            </blockquote>
          </section>

          <section className="news-content">
            <h2 className="section-title">Como a OZ Corretora Está Agindo</h2>
            <p>
              A OZ Corretora está monitorando de perto as discussões em Brasília e já desenvolveu planos de ação 
              para garantir que nossos clientes continuem a receber o melhor suporte e condições competitivas, mesmo diante de mudanças.
            </p>
            <p>
              Assista nosso webinar exclusivo com nossos especialistas, que explicam os detalhes desta proposta e como ela pode afetar você.
            </p>
            <Button variant="primary" href="https://www.linkedin.com/company/oz-cambio" className="mt-3">
              Saiba Mais
            </Button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPage;
