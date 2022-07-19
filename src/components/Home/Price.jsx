import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Price.css";

const Price = () => {
  return (
    <div className="bg-light">
      <br/>
      <h1 className="text-center" style={{padding:"90px"}}>Simple and affordable pricing</h1>
      <br/>
      <Container>
      <Row>
        <Col md={4} className="price">
          <Card className="kartu">
            <Card.Header className="bg-light text-dark text-center" as="h5">
              STANDARD
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.150.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card className="kartu">
            <Card.Header className="bg-light text-dark text-center" as="h5">
              PROFESSIONAL
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.400.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card className="kartu">
            <Card.Header className="bg-light text-dark text-center" as="h5">
              ULTIMATE
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.1.000.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-light">START NOW</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      <h5 className='learnmore'><a href="/PriceList">Learn more...</a></h5>
    </div>
  );
};

export default Price;