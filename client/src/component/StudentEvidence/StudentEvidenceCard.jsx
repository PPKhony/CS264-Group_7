import axios from "axios";
import "./StudentEvidentCard.css";
import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

function StudentEvidenceCard(props) {
  const {
    courseCode,
    uuid,
    dayTime,
    courseName,
    credits,
    instructor,
    section,
    type,
    status,
  } = props.props;

  const [statusColor, setStatusColor] = useState("#c6c6c6");
  const [cardColor, setCardColor] = useState("#fedcd7");
  const [modalShow, setModalShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [response, setResponse] = useState([]);
  const [statusCode, setStatusCode] = useState(status);
  const [details, setDeatails] = useState("");

  useEffect(() => {
    handleQueryStudentInfo();
  }, []);

  useEffect(() => {
    if (status === "อนุมัติคำร้อง") {
      setStatusColor("#91d226");
      setCardColor("#e7e7e7");
      setDisable(true);
      setStatusCode("อนุมัติคำร้อง");
    } else if (status === "ปฏิเสธคำร้อง") {
      setStatusColor("#f68282");
      setCardColor("#e7e7e7");
      setDisable(true);
      setStatusCode("ปฏิเสธคำร้อง");
    }
  }, [status]);
  // useEffect(() => {
  //   console.log(response);
  // }, [response]);

  useEffect(() => {
    handleSubmitStatus();
  }, [statusCode]);

  const handleQueryStudentInfo = async () => {
    const config = {
      params: {
        uuid: uuid,
      },
    };
    // Perform a GET request with parameters
    axios
      .get("http://localhost:8080/api/student/querystudentbyuuid", config)
      .then((response) => {
        setResponse(response.data);
        // console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  const handleSubmitStatus = () => {
    const data = {
      status: statusCode,
      detail: details,
      uuid: uuid,
      coursecode: courseCode,
    };
    axios
      .post("http://localhost:8080/api/student/updatestatus", data)
      // .then((response) => {
      //   // console.log(response);
      // })
      // .catch((error) => {
      //   // console.log(error);
      // });
  };

  const whenAccept = async () => {
    setStatusColor("#91d226");
    setCardColor("#e7e7e7");
    setDisable(true);
    setModalShow(false);
    setStatusCode("อนุมัติคำร้อง");
  };

  const whenReject = () => {
    setStatusColor("#f68282");
    setCardColor("#e7e7e7");
    setDisable(true);
    setModalShow(false);
    setStatusCode("ปฏิเสธคำร้อง");
  };

  const MoreInformation = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
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
          <Form style={{ textAlign: "left" }} noValidate>
            <h2 className="my-3">Section 1 : ข้อมูลเบื้องต้น</h2>
            <Form.Group className="my-2">
              <Form.Label>รหัสคำร้อง</Form.Label>
              <Form.Control type="email" id="text" value={uuid} disabled />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={response.email}
                disabled
              />
            </Form.Group>
            <Row md={2} lg={3}>
              <Form.Group as="Col" className="my-2">
                <Form.Label>คำนำหน้าชื่อ</Form.Label>
                <Form.Select id="prefix" value={response.prefix} disabled>
                  <option value="">Select คำนำหน้าชื่อ</option>
                  <option value="นาย"> นาย </option>
                  <option value="นาง"> นาง </option>
                  <option value="นางสาว"> นางสาว </option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="my-2" as="Col">
                <Form.Label>ชื่อ นามสกุล</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  id="firstname"
                  value={response.name}
                  disable
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>รหัสนักศึกษา</Form.Label>
                <Form.Control
                  type="text"
                  id="studentid"
                  value={response.studentID}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>ชั้นปี</Form.Label>
                <Form.Control
                  type="text"
                  id="studentYear"
                  value={response.studentID}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>สาขาวิชา</Form.Label>
                <Form.Control
                  type="text"
                  id="department"
                  value={response.department}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>ชื่ออาจารย์ที่ปรึกษา</Form.Label>
                <Form.Control
                  type="text"
                  id="advisor"
                  value={response.advisor}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>เบอร์โทรศัพท์มือถือ</Form.Label>
                <Form.Control
                  type="text"
                  id="studentPhone"
                  value={response.studentPhone}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>เบอร์โทรศัพท์ผู้ปกครอง</Form.Label>
                <Form.Control
                  type="text"
                  id="parentPhone"
                  value={response.parentPhone}
                  disabled
                />
              </Form.Group>
            </Row>
            <h4 className="mt-4">รายละเอียดที่พักอาศัย</h4>
            <Row md={2} lg={3}>
              <Form.Group as="Col" className="my-2">
                <Form.Label>บ้านเลขที่</Form.Label>
                <Form.Control
                  type="text"
                  id="addressNumber"
                  value={response.addressNumber}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>หมู่</Form.Label>
                <Form.Control
                  type="text"
                  id="moo"
                  value={response.moo}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>ตำบล</Form.Label>
                <Form.Control
                  type="text"
                  id="tumbol"
                  value={response.tumbol}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>อำเภอ</Form.Label>
                <Form.Control
                  type="text"
                  id="amphur"
                  value={response.amphur}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>จังหวัด</Form.Label>
                <Form.Control
                  type="text"
                  id="provience"
                  value={response.provience}
                  disabled
                />
              </Form.Group>
            </Row>
            <h4 className="mt-4">รายละเอียดคำร้อง</h4>
            <Form.Group className="my-2">
              <Form.Label>ประสงค์ต้องการยื่นคำร้องในเรื่อง</Form.Label>
              <Form.Select
                type="radio"
                id="topic"
                value={response.topic}
                disabled
              >
                <option value="">Please select</option>
                <option
                  label="ประสงค์ขอเพิ่ม-ถอนรายวิชาล่าช้า (w)"
                  value="ประสงค์ขอเพิ่ม-ถอนรายวิชาล่าช้า(w)"
                />
                {/* <option label="ขอลาออก" value="ขอลาออก" /> */}
              </Form.Select>
            </Form.Group>
            <h4 className="mt-4">รายละเอียดรายวิชา</h4>
            <Row md={2} lg={3}>
              <Form.Group as="Col" className="my-2">
                <Form.Label>รหัสวิชา</Form.Label>
                <Form.Control
                  type="text"
                  id="courseCode"
                  value={courseCode}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>ชื่อรายวิชา</Form.Label>
                <Form.Control
                  type="text"
                  id="courseName"
                  value={courseName}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>หน่วยกิต</Form.Label>
                <Form.Control
                  type="text"
                  id="credits"
                  value={credits}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>วันเวลาที่เรียน</Form.Label>
                <Form.Control
                  type="text"
                  id="dayTime"
                  value={dayTime}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>อาจารย์ผู้สอน</Form.Label>
                <Form.Control
                  type="text"
                  id="instructor"
                  value={instructor}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>section ที่เรียน</Form.Label>
                <Form.Control
                  type="text"
                  id="section"
                  value={section}
                  disabled
                />
              </Form.Group>
              <Form.Group as="Col" className="my-2">
                <Form.Label>ชนิดการขอคำร้อง เพิ่ม / ถอน รายวิชา</Form.Label>
                <Form.Select type="text" id="type" value={type} disabled>
                  <option value={type}>{type}</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-block">
          <p className="my-2" style={{ textAlign: "left" }}>
            *เมื่อกดอนุมัติหรือปฏิเสธคำร้องแล้วไม่สามารถเปลี่ยนแปลงได้
          </p>
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
          <Col className="d-flex justify-content-center">{response.date}</Col>
          <Col className="d-flexbox justify-content-center">
            <Col style={{ fontWeight: "bold" }}>{response.name}</Col>
            <Col>{response.studentID}</Col>
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
