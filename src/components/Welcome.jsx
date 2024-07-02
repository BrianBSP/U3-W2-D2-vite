import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Row className="justify-content-center">
        <Col md={6}>
          <Alert className="mb-0" variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Benvenuto su EPIC Book!</Alert.Heading>
            <p>Qui potrai trovare i tuoi libri preferiti.</p>
          </Alert>
        </Col>
      </Row>
    );
  }
};
export default Welcome;
