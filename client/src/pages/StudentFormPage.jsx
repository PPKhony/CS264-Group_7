import { Container } from "react-bootstrap";
import StudentForm from "../component/StudentForm/StudentForm";
import CourseProvider from "../context/CourseContext";
function StudentFormPage() {
  return (
    <>
      <Container>
        <CourseProvider>
          <StudentForm/>
        </CourseProvider>
      </Container>
    </>
  );
}

export default StudentFormPage;
