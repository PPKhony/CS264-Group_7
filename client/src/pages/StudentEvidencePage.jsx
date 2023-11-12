import { Container, Col, Row, Navbar , Nav , NavDropdown} from "react-bootstrap";
import "./StudentEvidence.css";
import StudentEvidenceCard from "../component/StudentEvidence/StudentEvidenceCard";
function StudentEvidencePage() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor: "tran"}}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container fluid className="mainCard" style={{opacity: "1"}}>
        <h2 className="mb-5" style={{fontWeight: "bold"}}>รายการคำร้องขอ</h2>
        <Row className="px-4">
          <Col className="d-flex justify-content-center">วันที่ส่งเข้ามา</Col>
          <Col>รายชื่อนักศึกษา</Col>
          <Col className="d-flex justify-content-center">สถานะคำร้อง</Col>
          <Col className="d-flex justify-content-center">ข้อมูลเพิ่มเติม</Col>
        </Row>
        <hr/>
        <StudentEvidenceCard/>
        <StudentEvidenceCard/>
      </Container>
    </>
  );
}

export default StudentEvidencePage;
