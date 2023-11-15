import { useContext, useEffect } from "react";
import { CourseContext } from "../../context/CourseContext";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

function WithdrawSubjectForm() {
  const { withdraw, setWithdraw } = useContext(CourseContext);
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
    const updatedFormFields = withdraw.filter((field) => field.id !== id);
    setWithdraw(updatedFormFields);
  };

  // useEffect(() => {
  //   console.log(withdraw);
  // }, [withdraw]);

  //Form of com management
  const addFormField = () => {
    if (withdraw.length >= 7) {
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
  
      setWithdraw([...withdraw, newField]);
    }
    
  };

  const handleFieldChange = (id, key, value) => {
    const updatedFormFields = withdraw.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setWithdraw(updatedFormFields);
  };

  const renderFormField = (field) => (
    <Card key={field.id} className="mt-3">
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        {fieldConfig.map((config) => (
          <Row key={config.key}>
            <Col>
              <Form.Group>
                <Form.Label>{config.label}</Form.Label>
                <Form.Control
                  className="my-1"
                  type="text"
                  onChange={(e) =>
                    handleFieldChange(field.id, config.key, e.target.value)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
        <Button variant="danger" onClick={() => removeFormField(field.id)}>
          Remove Field
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <div>
    <h4 className="mt-4">จดทะเบียนถอนรายวิชา</h4>
    <p>Withdraw subject {withdraw.length}/7</p>
      <Button onClick={addFormField} variant="primary" className="my-2">
        Add Withdraw Subject
      </Button> 
      {withdraw.map(renderFormField)}
      <hr/>
    </div>
  );
}

export default WithdrawSubjectForm;
