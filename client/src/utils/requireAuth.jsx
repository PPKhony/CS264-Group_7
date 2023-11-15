import {Navigate ,  useLocation} from 'react-router-dom';
import useAuth from "../hooks/useAuth.jsx";
import StudentEvidencePage from '../pages/StudentEvidencePage.jsx';
import StudentFormPage from '../pages/StudentFormPage.jsx';
function RequireAuth() {
    const {auth} = useAuth();
    const location = useLocation();
    return (
        auth?.status
            ? auth?.type=="student"
                ?<StudentFormPage/>
                :<StudentEvidencePage/>
            : <Navigate to="/login" state={{from: location}} replace/>
    );
}

export default RequireAuth;