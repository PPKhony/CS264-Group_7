import { Container, Col, Row } from "react-bootstrap";
import "./StudentEvidence.css";
import StudentEvidenceCard from "../component/StudentEvidence/StudentEvidenceCard";
import Header from "../component/global/Header";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function StudentEvidencePage() {
  const { auth } = useAuth();
  const [response, setResponse] = useState([]);

  useEffect(()=>{handleQueryRequest()},[])

  const handleQueryRequest = async () => {
    const config = {
      params: {
        instructor: 'test'
      }
    };
    
    // Perform a GET request with parameters
    axios.get('http://localhost:8080/api/student/queryrequest', config)
      .then(response => {
        setResponse(response.data);
        // console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle error
        // console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <Header />
      <Container fluid className="mainCard" style={{ opacity: "1" }}>
        <h2 className="mb-5" style={{ fontWeight: "bold" }}>
          รายการคำร้องขอ
        </h2>
        <Row className="px-4">
          <Col className="d-flex justify-content-center">วันที่ส่งเข้ามา</Col>
          <Col>รายชื่อนักศึกษา</Col>
          <Col className="d-flex justify-content-center">สถานะคำร้อง</Col>
          <Col className="d-flex justify-content-center">ข้อมูลเพิ่มเติม</Col>
        </Row>
        <hr />
        {response.map((item) => (
          <>
            <StudentEvidenceCard props={item} key={uuidv4()}/>
          </>
        ))}
      </Container>
    </>
  );
}

export default StudentEvidencePage;
