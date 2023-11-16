import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function StudentFileAttachment() {
  const [file, setFile] = useState(null);
  const [UUID, setUUID] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUUIDChange = (e) => {
    setUUID(e.target.value);
  }
	useEffect(()=>{
		console.log(file);
	},[file])

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('pdfFile', file);
			formData.append('uuid',UUID)
      try {
        const response = await axios.post("http://localhost:8080/api/attachfile/uploadpdf", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("File uploaded successfully!", response);
        // Handle success, update state, or perform other actions
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error
      }
    } else {
      // Handle case where no file is selected
      console.error("No file selected");
    }
  };

  return (
    <Card fluid className="p-5" style={{ textAlign: "left" }}>
      <h2 className="my-3">การแนบไฟล์ที่เกี่ยวข้องของนักศึกษา</h2>
      <p>
        <Form onSubmit={handleFileUpload}>
          <Form.Group>
            <Form.Label htmlFor="uuid">
              {" "}
              รหัส uuid ที่ได้จากการกรอก {" "}
            </Form.Label>
            <Link to="/form">แบบฟอร์มกรอกคำร้อง</Link>
            <Form.Control id="uuid" placeholder="xxxx-xxxx-xxxx-xxxx-xxxx" onChange={handleUUIDChange}/>
          </Form.Group>
          <Form.Group controlId="formFile" className="my-3">
            <Form.Label>กรุณาแนบหลักฐาน</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </p>
    </Card>
  );
}

export default StudentFileAttachment;
