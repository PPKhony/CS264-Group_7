import {Navigate ,  useLocation} from 'react-router-dom';
import useAuth from "../hooks/useAuth.jsx";
import StudentEvidencePage from '../pages/StudentEvidencePage.jsx';
function RequireAuth() {
    const {auth} = useAuth();
    const location = useLocation();
    
    return (
        auth?.tu_status
            ? <StudentEvidencePage/>
            : <Navigate to="/login" state={{from: location}} replace/>
    );
}

export default RequireAuth;