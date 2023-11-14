import { useContext, useEffect } from "react";
import { CourseContext } from "../../context/CourseContext";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

function RegisterSubjectForm() {
  const { register, setRegister , handleData} = useContext(CourseContext);
  const fieldConfig = [
    { label: "รหัสวิชา", key: "courseCode" },
    { label: "ชื่อวิชา", key: "courseName" },
    { label: "Section", key: "section" },
    { label: "วัน เวลา", key: "dayTime" },
    { label: "หน่วยกิต", key: "credits" },
    { label: "ชื่อผู้สอน", key: "instructor" },
  ];

  //In component management
  const removeFormField = (id) => {
    const updatedFormFields = register.filter((field) => field.id !== id);
    setRegister(updatedFormFields);
  };

  // useEffect(() => {
  //   console.log(register);
  // }, [register]);

  //Form of com management
  const addFormField = () => {
    if (register.length >= 7) {
      alert("รายวิชาในการเพิ่ม หรือ ถอน ได้ครั้งละไม่เกินอย่างละ 7 รายการ");
    } else {
      const newField = {
        id: Date.now(),
        courseCode: "",
        courseName: "",
        section: "",
        dayTime: "",
        credits: "",
        instructor: "",
      };

      setRegister([...register, newField]);
    }
  };

  const handleFieldChange = (id, key, value) => {
    const updatedFormFields = register.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setRegister(updatedFormFields);
  };

  const renderFormField = (field) => (
    <Card key={field.id} className="my-3">
      <Card.Body>
        <Card.Title>Register Subject</Card.Title>
        <Row xs={1} lg={2}>
          {fieldConfig.map((config) => (
            <Col key={config.key}>
              <Form.Group className="my-1">
                <Form.Label>{config.label}</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    handleFieldChange(field.id, config.key, e.target.value)
                  }
                  required
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
        <Button className="my-2" variant="danger" onClick={() => removeFormField(field.id)}>
          Remove Field
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      
      <hr className="my-4"/>
      <h2>Section 2 : วิชาที่ขอจดทะเบียนเพิ่ม</h2>
      <li>การจดทะเบียนเพิ่ม หรือ ถอนรายวิชาต้องทำรายการอย่างน้อย 1 รายการ</li>
      <li>รายวิชาในการเพิ่ม หรือ ถอน ได้ครั้งละไม่เกินอย่างละ 7 รายการ</li>
      <h4 className="mt-4">จดทะเบียนเพิ่มรายวิชา</h4>
      <p>Register subject {register.length}/7</p>
      <Button onClick={addFormField} variant="primary" className="my-2">
        Add Register Subject
      </Button>
      {register.map(renderFormField)}
      <hr/>
    </div>
  );
}

export default RegisterSubjectForm;
