import Accordion from 'react-bootstrap/Accordion';
import "./FrequentlyQuestion.css"

const FrequentlyQuestion = () => {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Frequently Asked Questions</h2>
          <Accordion className="ask">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5>How do I sign up?</h5></Accordion.Header>
        <Accordion.Body>
         <p> Signing up for Zoho Books is easy. In the sign up page, provide your company name, email address, and contact number, choose a password of your liking, and you're good to go. On signing up, you get a fully-featured 14-day free trial of the product before you choose to subscribe to Zoho Books. </p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5>Am I bound to Zoho Books forever? </h5></Accordion.Header>
        <Accordion.Body>
        No! Zoho Books is a pay-as-you-go service, so you are not bound by any contract or commitment to stay subscribed. You can cancel your subscription at any time you feel you are not satisfied with our product or service. On cancelling your subscription, you can get a full refund based on our company refund policy . 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h5>For how long is the free plan free? </h5></Accordion.Header>
        <Accordion.Body>
        The free plan of Zoho Books is free forever, as long as your revenue falls under the threshold of 50K USD for the fiscal year. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h5>How many invoices can I create in a year? </h5></Accordion.Header>
        <Accordion.Body>
        You can create 5,000 invoices in the Standard plan, 10,000 invoices in the Professional plan, 25,000 invoices in the Premium plan, and 100,000 invoices for the elite and ultimate plans in a year in Zoho Books. If your business needs to generate more invoices, please reach out to us at sales@zohocorp.com. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h5>How many bills can I create in a year?</h5></Accordion.Header>
        <Accordion.Body>
        You can create 10,000 bills in the Professional plan, 25,000 bills in the Premium plan, and 100,000 bills for the elite and ultimate plans in a year in Zoho Books.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h5>How many users can I add in the Premium plan of Zoho Books? </h5></Accordion.Header>
        <Accordion.Body>
        You can add up to 10 users in the Premium plan of Zoho Books. If you require additional users, you can buy the User addon of Zoho Books at $3 per user per month or $2.5 per user per month billed annually. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><h5>Are my transactions secure? </h5></Accordion.Header>
        <Accordion.Body>
        Yes, Zoho Books secures your transactions through SSL encryption and two factor authentication method.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><h5>Can I run more than one business? </h5></Accordion.Header>
        <Accordion.Body>
        Yes, absolutely. You can have multiple businesses as different organizations associated with your Zoho Books account 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><h5>Do you store my credit card information? </h5></Accordion.Header>
        <Accordion.Body>
        No, we don't store your credit card information. Take a look at our Privacy Policy to learn more. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FrequentlyQuestion