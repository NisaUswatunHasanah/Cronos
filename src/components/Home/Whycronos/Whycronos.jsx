import { Card, Container, Row, Col, Image } from "react-bootstrap";

function Whycronos() {
  return (
    <div>
      <Container>
        {/* <br /> */}
        <h1 className="text-white">Why Cronos is the preferred accounting software of businesses</h1>
        {/* <br /> */}
        <Row>
          <Col md={4} className="whyWrapper" id="whycronos">
            <Card className="movieImage">
              <Image
                // src={avangersImage}
                alt="Why Cronos"
                className="images"
                />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">End-to-end accounting</Card.Title>
                  <Card.Text className="text-left">
                  Right from negotiating deals, to raising sales orders, to invoicing, Cronos handles mundane accounting tasks so you can focus on your business.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="whyWrapper">
            <Card className="movieImage">
              <Image 
              alt="Why Cronos"
              className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Easy Collaboration</Card.Title>
                  <Card.Text className="text-left">
                  With role-based acces, you can add your collegues and your accountant to your organisation so they can log time, view reports, or manage your accounts.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="whyWrapper">
            <Card className="movieImage">
              <Image
                // src={blackwidowImage}
                alt="Why Cronos"
                className="images"
                />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Integrated platform</Card.Title>
                  <Card.Text className="text-left">
                  As your bussines grows, add more of Cronos 50+ apps to help you manage and run every aspect of your bussines from wherever you are.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
//       <Container>
//           <br />
//                 <h1 className="text-white"></h1>
//           <br />
//       <CardGroup>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>End-to-end accounting</Card.Title>
//           <Card.Text>
//             Right from negotiating deals, to raising sales orders, to invoicing, Cronos handles mundane accounting tasks so you can focus on your business.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Easy Collaboration</Card.Title>
//           <Card.Text>
//             with role-based acces, you can add your collegues and your accountant to your organisation so they can log time, view reports, or manage your accounts.{' '}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Integrated platform</Card.Title>
//           <Card.Text>
//             as your bussines grows, add more of Cronos 50+ apps to help you manage and run every aspect of your bussines from wherever you are.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </CardGroup>
//     </Container>
//   );
// }

export default Whycronos;
