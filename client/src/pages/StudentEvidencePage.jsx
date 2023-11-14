import { Container, Col, Row} from "react-bootstrap";
import "./StudentEvidence.css";
import StudentEvidenceCard from "../component/StudentEvidence/StudentEvidenceCard";
function StudentEvidencePage() {
  return (
    <>
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
