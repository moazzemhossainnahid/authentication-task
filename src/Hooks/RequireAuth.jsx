import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Pages/Authentication/Fiebase.init';
import Loading from '../Components/Loading/Loading';
  

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // console.log(user);

    if (loading) {
        return <Loading />
    }

    if (!user) {
        signOut(auth);
        return <Navigate to='/signin' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;