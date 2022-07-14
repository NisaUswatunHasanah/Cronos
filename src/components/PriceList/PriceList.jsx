// import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import Navigationbar from '../Home/NavigationBar/Navigationbar'

// const PriceList = () => {
//   return (
//     <>
//     <Navigationbar />
//     <Container className="bg-primary">
//       <br/>
//       <h1 className="text-center">Simple and affordable pricing</h1>
//       <br/>
//       <Row>
//         <Col md={4} className="price">
//           <Card border ="info" className="text-dark text-center">
//             <Card.Header className="bg-info text-dark" as="h5">
//               STANDARD
//             </Card.Header>
//             <Card.Body>
//               <Card.Title>Rp.150.000,00</Card.Title>
//               <Card.Text>/month billed annually.</Card.Text>
//               <Button variant="outline-dark">START NOW</Button>
//             </Card.Body>
//             <footer className="bg-primary text-light">
//               <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
//               <ul>
//                 <li>Invite 3 Users </li>
//                 <li>Manage Invoices (Up to 5,000) </li>
//                 <li>Connect and fetch bank & credit card feeds via bank feeds provider </li>
//                 <li>Predefined User Roles </li>
//                 <li>Track Project Expenses and Invoice</li>
//                 <li>Project Tasks</li>
//                 <li>Bulk Updates</li>
//                 <li>Transaction Locking</li>
//                 <li>Custom Views</li>
//                 <li>Custom Fields</li>
//                 <li>Reporting Tags </li>
//                 <li>Timesheet and Billing </li>
//                 <li>Payment Gateways</li>
//               </ul>
//               </div>
//             </footer>
//             </Card>
//         </Col>
//         <Col md={4} className="price">
//           <Card border ="info" className="text-dark text-center">
//             <Card.Header className="bg-info text-dark" as="h5">
//               PROFESSIONAL
//             </Card.Header>
//             <Card.Body>
//               <Card.Title>Rp.400.000,00</Card.Title>
//               <Card.Text>/month billed annually.</Card.Text>
//               <Button variant="outline-dark">START NOW</Button>
//             </Card.Body>
//             <footer className="bg-primary text-light">
//               <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
//               <ul>
//                 <li>Invite 10 Users </li>
//                 <li>Sales Approval </li>
//                 <li>Retainer Invoices</li>
//                 <li>Bills </li>
//                 <li>Payments Made</li>
//                 <li>Vendor Credits </li>
//                 <li>Recurring Bills</li>
//                 <li>Sales Orders </li>
//                 <li>Purchase Orders </li>
//                 <li>Purchase Approval </li>
//                 <li>Multi-currency Handling </li>
//                 <li>Currency Adjustments </li>
//                 <li>Stock Tracking </li>
//                 <li>Price Lists </li>
//                 <li>Landed Costs </li>
//                 <li>Custom Roles </li>
//                 <li>Timesheet Approval </li>
//                 <li> Timesheet - Client Approval </li>
//                 <li>Contextual Chat </li>
//                 <li>Retainer Invoices for Projects </li>
//                 <li>Project Profitability </li>
//                 <li> Journal Templates </li>
//                 <li>Tasks </li>
//                 <li>Recurring Journals </li>
//                 <li>Workflow Rules (Up to 10)</li>
//               </ul>
//               </div>
//             </footer>
//           </Card>
//         </Col>
//         <Col md={4} className="price">
//           <Card border ="info" className="text-dark text-center">
//             <Card.Header className="bg-info text-dark" as="h5">
//               ULTIMATE
//             </Card.Header>
//             <Card.Body>
//               <Card.Title>Rp.1.000.000,00</Card.Title>
//               <Card.Text>/month billed annually.</Card.Text>
//               <Button variant="outline-dark">START NOW</Button>
//             </Card.Body>
//             <footer className="bg-primary text-light">
//               <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
//               <ul>
//                 <li>Invite Unlimited Users </li>
//                 <li>3 Branches</li>
//                 <li>Custom Domain </li>
//                 <li>Vendor Portal  </li>
//                 <li>Multi-Transaction Number Series </li>
//                 <li>Budgeting </li>
//                 <li>Custom Buttons</li>
//                 <li> Validation Rules </li>
//                 <li>Related Lists </li>
//                 <li>WebTabs </li>
//                 <li>Workflow Rules (Up to 200)</li>
//                 <li>Custom Reports </li>
//                 <li>10 Custom Modules </li>
//                 <li>Tax Rules </li>
//               </ul>
//               </div>
//             </footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   )
// }

// export default PriceList

import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navigationbar from '../Home/NavigationBar/Navigationbar'
import Question from "./Question";

const PriceList = () => {
  return (
      <div className="bg-light">
      <Navigationbar />
      <br/>
      <h1 className="text-center">Simple and affordable pricing</h1>
      <br/>
      <Container>
      <Row>
        <Col md={4} className="price">
          <Card border ="info" className="text-dark text-center">
            <Card.Header className="bg-info text-dark" as="h5">
              STANDARD
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.150.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-dark">START NOW</Button>
            </Card.Body>
            <footer className="bg-primary text-light">
              <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
              <ul>
                <li>Invite 3 Users </li>
                <li>Manage Invoices (Up to 5,000) </li>
                <li>Connect and fetch bank & credit card feeds via bank feeds provider </li>
                <li>Predefined User Roles </li>
                <li>Track Project Expenses and Invoice</li>
                <li>Project Tasks</li>
                <li>Bulk Updates</li>
                <li>Transaction Locking</li>
                <li>Custom Views</li>
                <li>Custom Fields</li>
                <li>Reporting Tags </li>
                <li>Timesheet and Billing </li>
                <li>Payment Gateways</li>
              </ul>
              </div>
            </footer>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card border ="info" className="text-dark text-center">
            <Card.Header className="bg-info text-dark text-center" as="h5">
              PROFESSIONAL
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.400.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-dark">START NOW</Button>
            </Card.Body>
            <footer className="bg-primary text-light">
              <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
              <ul>
                <li>Invite 10 Users </li>
                <li>Sales Approval </li>
                <li>Retainer Invoices</li>
                <li>Bills </li>
                <li>Payments Made</li>
                <li>Vendor Credits </li>
                <li>Recurring Bills</li>
                <li>Sales Orders </li>
                <li>Purchase Orders </li>
                <li>Purchase Approval </li>
                <li>Multi-currency Handling </li>
                <li>Currency Adjustments </li>
                <li>Stock Tracking </li>
                <li>Price Lists </li>
                <li>Landed Costs </li>
                <li>Custom Roles </li>
                <li>Timesheet Approval </li>
                <li> Timesheet - Client Approval </li>
                <li>Contextual Chat </li>
                <li>Retainer Invoices for Projects </li>
                <li>Project Profitability </li>
                <li> Journal Templates </li>
                <li>Tasks </li>
                <li>Recurring Journals </li>
                <li>Workflow Rules (Up to 10)</li>
              </ul>
              </div>
            </footer>
          </Card>
        </Col>
        <Col md={4} className="price">
          <Card border ="info" className="text-dark text-center">
            <Card.Header className="bg-info text-dark text-center" as="h5">
              ULTIMATE
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title>Rp.1.000.000,00</Card.Title>
              <Card.Text>/month billed annually.</Card.Text>
              <Button variant="outline-dark">START NOW</Button>
            </Card.Body>
            <footer className="bg-primary text-light">
              <div style={{textAlign: "left", margin: "20px", width: "18rem", height: "38rem"}}>
              <ul>
                <li>Invite Unlimited Users </li>
                <li>3 Branches</li>
                <li>Custom Domain </li>
                <li>Vendor Portal  </li>
                <li>Multi-Transaction Number Series </li>
                <li>Budgeting </li>
                <li>Custom Buttons</li>
                <li> Validation Rules </li>
                <li>Related Lists </li>
                <li>WebTabs </li>
                <li>Workflow Rules (Up to 200)</li>
                <li>Custom Reports </li>
                <li>10 Custom Modules </li>
                <li>Tax Rules </li>
              </ul>
              </div>
            </footer>
          </Card>
        </Col>
      </Row>
      </Container>
      <br/>
      <br/>
      <Question/>

    </div>
  )
}

export default PriceList