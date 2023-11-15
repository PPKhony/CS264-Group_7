import { Container } from "react-bootstrap";
import StudentForm from "../component/StudentForm/StudentForm";
import CourseProvider from "../context/CourseContext";
import Header from "../component/global/Header";
function StudentFormPage() {
  return (
    <>
      <Header />
      <Container className="rounded p-4" style={{ backgroundColor: "white" }}>
        <CourseProvider>
          <StudentForm />
        </CourseProvider>
      </Container>
    </>
  );
}

export default StudentFormPage;
