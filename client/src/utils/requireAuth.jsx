import {Navigate ,  useLocation} from 'react-router-dom';
import useAuth from "../hooks/useAuth.jsx";
import HomePage from '../pages/HomePage.jsx';
function RequireAuth() {
    const {auth} = useAuth();
    const location = useLocation();
    
    return (
        auth?.tu_status
            ? <HomePage/>
            : <Navigate to="/login" state={{from: location}} replace/>
    );
}

export default RequireAuth;