import "./StudentEvidentCard.css";
import { useState } from "react";
import { Card, Row, Col, Container, Modal, Button } from "react-bootstrap";

function StudentEvidenceCard(props) {
  const { name, id, status, date } = props;
  const [statusColor, setStatusColor] = useState("#c6c6c6");
  const [cardColor, setCardColor] = useState("#fedcd7");
  const [modalShow, setModalShow] = useState(false);
  const [disable, setDisable] = useState(false);

  const whenAccept = () => {
    setStatusColor("#91d226");
    setCardColor("#e7e7e7");
    setDisable(true);
    setModalShow(false);
  };

  const whenReject = () => {
    setStatusColor("#f68282");
    setCardColor("#e7e7e7");
    setDisable(true);
    setModalShow(false);
  };
  const MoreInformation = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ fontFamily: "Mali" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            รายละเอียดคำร้อง
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>ข้อมูลคำร้อง</h5>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p style={{textAlign: "left"}}>*เมื่อกดอนุมัติหรือปฏิเสธคำร้องแล้วไม่สามารถเปลี่ยนแปลงได้</p>
          <Button variant="danger" disabled={disable} onClick={whenReject}>
            ปฎิเสธคำร้อง
          </Button>
          <Button variant="success" disabled={disable} onClick={whenAccept}>
            อนุมัติคำร้อง
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Card className="eachrow p-4" style={{ backgroundColor: cardColor }}>
        <Row>
          <Col className="d-flex justify-content-center">{date}</Col>
          <Col className="d-flexbox justify-content-center">
            <Col style={{ fontWeight: "bold" }}>{name}</Col>
            <Col>{id}</Col>
          </Col>
          <Col>
            <Container
              className="status"
              style={{ width: "100%", height: "100%", background: statusColor }}
            >
              {status}
            </Container>
          </Col>
          <Col className="d-flex justify-content-center">
            <button
              className="status"
              style={{ width: "100%", height: "100%", background: "#3c5ccf" }}
              onClick={() => setModalShow(true)}
            >
              More-Info
            </button>
          </Col>
        </Row>
      </Card>
      <MoreInformation show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default StudentEvidenceCard;
