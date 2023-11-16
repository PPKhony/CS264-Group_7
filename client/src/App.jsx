import "./App.css";
import Loginpage from "./pages/Loginpage.jsx";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/requireAuth";
import StudentEvidencePage from "./pages/StudentEvidencePage.jsx";
import StudentFormPage from "./pages/StudentFormPage.jsx";
import StudentFileAttachment from "./pages/StudentFileAttachmentPage.jsx";
import UnauthorizedPages from "./pages/UnauthorizePages.jsx";

function App() {
  return (
    <Routes>
      {/* Public Path */}
      <Route path="/*" element={<Loginpage/>} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/unauthorized" element={<Loginpage />} />
      <Route path="/attachfile" element={<StudentFileAttachment/>} />
      
      <Route element={<RequireAuth />}>
        <Route path="/form" element={<StudentFormPage/>} />
        <Route path="/home" element={<StudentEvidencePage />} />
      </Route>
    </Routes>
  );
}

export default App;
