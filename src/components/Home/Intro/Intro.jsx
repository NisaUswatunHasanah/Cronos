import { Button, Container, Row, Col } from "react-bootstrap";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <Container  className="text-center d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">Financial Accounting Software</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Explore Demo</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;