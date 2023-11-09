import "./App.css";
import Loginpage from "./pages/Loginpage.jsx";
import HomePage from './pages/HomePage.jsx';
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/requireAuth";

function App() {
  return (
    <Routes>
      {/* Public Path */}
      <Route path="/*" element={<Loginpage/>} />
      <Route path="/login" element={<Loginpage />} />

      {/* Protected Path */}
      <Route element={<RequireAuth />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
