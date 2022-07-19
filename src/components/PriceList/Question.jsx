import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { BsEnvelopeOpen, BsTelephoneForward } from "react-icons/bs";

const Question = () => {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Have a Question?</h2>
        <Row>
            <Col >
            <CardGroup>
      <Card style={{textAlign: "left", margin: "10px", width: "18rem", height: "18rem"}}>
        <Card.Body>
          <Card.Title>Sales Enquiry</Card.Title>
          <Card.Text>
          <p><BsEnvelopeOpen /> sales@cronos.com</p>
          <br/>
          <p><BsTelephoneForward /> US- 8443165544</p>
          <p><BsTelephoneForward /> UK- 8000856099</p>
          <p><BsTelephoneForward /> Australia- 1800911076</p>
          <p><BsTelephoneForward /> South Africa- 27214268110</p>
          <p><BsTelephoneForward /> Canada- 15146736167</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{textAlign: "left", margin: "10px", width: "18rem", height: "18rem"}}>
        <Card.Body>
          <Card.Title> Support Enquiry </Card.Title>
          <Card.Text>
          <p><BsEnvelopeOpen /> support@cronos.com</p>
          <br/>
          <p><BsTelephoneForward /> US- 8443165544</p>
          <p><BsTelephoneForward /> UK- 8000856099</p>
          <p><BsTelephoneForward /> Australia- 1800911076</p>
          <p><BsTelephoneForward /> South Africa- 27214268110</p>
          <p><BsTelephoneForward /> Canada- 15146736167</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{textAlign: "left", margin: "10px", width: "18rem", height: "18rem"}}>
        <Card.Body>
          <Card.Title>Partnership Enquiry </Card.Title>
          <Card.Text>
          <p><BsEnvelopeOpen /> partnership@cronos.com</p>
          <p><BsEnvelopeOpen /> accountant@cronos.com</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Question