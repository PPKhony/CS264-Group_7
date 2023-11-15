import "./App.css";
import Loginpage from "./pages/Loginpage.jsx";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/requireAuth";
import StudentEvidencePage from "./pages/StudentEvidencePage.jsx";
import StudentFormPage from "./pages/StudentFormPage.jsx";

function App() {
  return (
    <Routes>
      {/* Public Path */}
      <Route path="/*" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      {/* <Route path="/form" element={<StudentFormPage/>}/> */}

      <Route element={<RequireAuth />}>
        <Route path="/home" element={<StudentEvidencePage />} />
      </Route>
    </Routes>
  );
}

export default App;
