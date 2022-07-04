import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../Price/Price.css";

const Price = () => {
  return (
    <>
    <Container>
      <br/>
      <h1 className="text-center">Simple and affordable pricing</h1>
      <br/>
      <Row>
        <Col md={4} className="price">
          <Card className="bg-primary text-white text-center">
            <Card.Header className="bg-light text-dark" as="h5">
              STANDARD
            </Card.Header>
            <Card.Body>
              <Card.Title>Rp.150.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card className="bg-primary text-white text-center">
            <Card.Header className="bg-light text-dark" as="h5">
              PROFESSIONAL
            </Card.Header>
            <Card.Body>
              <Card.Title>Rp.400.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card className="bg-primary text-white text-center">
            <Card.Header className="bg-light text-dark" as="h5">
              ULTIMATE
            </Card.Header>
            <Card.Body>
              <Card.Title>Rp.1.000.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Price;
