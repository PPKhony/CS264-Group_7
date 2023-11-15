import { useContext, useEffect , useState } from "react";
import { CourseContext } from "../../context/CourseContext.jsx";
import { AlertHeading, Button, Form , Row} from "react-bootstrap";
import RegisterSubjectForm from "./RegisterSubjectForm.jsx";
import WithdrawSubjectForm from "./WithdrawSubjectForm.jsx";
import useAuth from "../../hooks/useAuth.jsx";

function StudentForm() {
  const {auth} = useAuth();
  const { setStudent, student , handleData , register , withdraw , handleApipost} = useContext(CourseContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("กรุณาตรวจสอบฟอร์มใหม่อีกครั้ง")
    } 

    if (register.length+withdraw.length<1) {
      alert("กรุณาเพิ่มอย่างน้อย 1 รายการสำหรับการเพิ่มถอนรายวิชา")
    }

    setValidated(true)
    if (form.checkValidity()===true) {
      handleApipost()
    }

    e.preventDefault()
  };

  const handleChange = (event) => {
    const { id, value } =  event.target;
     setStudent({
      "email": auth.email,
      "name": auth.displayname_th,
      "studentID": auth.username,
      ...student,
      [id]: value,
    });
  };

//  const highLvl = () => {
//    handleData()
//    handleApipost()
//  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{textAlign: "left"}} noValidate validated={validated}>
        <h2 className="my-3">Section 1 : ข้อมูลเบื้องต้น</h2>
        <Form.Group className="my-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" id="email" value={auth.email} disabled onChange={handleChange} required/>
        </Form.Group>
        <Row md = {2} lg ={3}>
        <Form.Group as="Col"  className="my-2">
        <Form.Label>คำนำหน้าชื่อ</Form.Label>
        <Form.Select  id="prefix" onChange={handleChange} required> 
            <option value="">Select คำนำหน้าชื่อ</option>
            <option value="นาย"> นาย </option>
            <option value="นาง"> นาง </option>
            <option value="นางสาว"> นางสาว </option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="my-2" as="Col">
          <Form.Label>ชื่อ นามสกุล</Form.Label>
          <Form.Control type="text" value = {auth.displayname_th} disabled id="firstname" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>รหัสนักศึกษา</Form.Label>
          <Form.Control type="text" id="studentid" value={auth.username} disabled onChange={handleChange} required/>
        </Form.Group>
        <Form.Group  as="Col" className="my-2">
          <Form.Label>ชั้นปี</Form.Label>
          <Form.Control type="text" id="studentYear" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>สาขาวิชา</Form.Label>
          <Form.Control type="text" id="department" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>ชื่ออาจารย์ที่ปรึกษา</Form.Label>
          <Form.Control type="text" id="advisor" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>เบอร์โทรศัพท์มือถือ</Form.Label>
          <Form.Control type="text" id="studentPhone" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>เบอร์โทรศัพท์ผู้ปกครอง</Form.Label>
          <Form.Control type="text" id="parentPhone" onChange={handleChange} required/>
        </Form.Group>
        </Row>
        <h4 className="mt-4">รายละเอียดที่พักอาศัย</h4>
        <Row md = {2} lg ={3}>
        <Form.Group as="Col" className="my-2">
          <Form.Label>บ้านเลขที่</Form.Label>
          <Form.Control type="text" id="addressNumber" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>หมู่</Form.Label>
          <Form.Control type="text" id="moo" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>ตำบล</Form.Label>
          <Form.Control type="text" id="tumbol" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>อำเภอ</Form.Label>
          <Form.Control type="text" id="amphur" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group as="Col" className="my-2">
          <Form.Label>จังหวัด</Form.Label>
          <Form.Control type="text" id="provience" onChange={handleChange} required/>
        </Form.Group>
        </Row>
        <h4 className="mt-4">รายละเอียดคำร้อง</h4>
        <Form.Group className="my-2">
          <Form.Label>ประสงค์ต้องการยื่นคำร้องในเรื่อง</Form.Label>
          <Form.Select type="radio" id = "topic" onChange={handleChange} required> 
            <option value="">Please select</option>
            <option label="ประสงค์ขอเพิ่ม-ถอนรายวิชาล่าช้า (w)" value="ประสงค์ขอเพิ่ม-ถอนรายวิชาล่าช้า(w)" /> 
            {/* <option label="ขอลาออก" value="ขอลาออก" /> */}
          </Form.Select>
        </Form.Group>
        <RegisterSubjectForm/>
        <WithdrawSubjectForm/>
        <Button type="submit"> Submit </Button>
        
      
      </Form>
    </>
  );
}

export default StudentForm;
