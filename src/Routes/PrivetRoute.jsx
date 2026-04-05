import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location)

    // Show loading spinner while checking auth status
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-bars w-10 h-12 text-[#BB8506]"></span>
            </div>
        );
    }

    // If not logged in, redirect to login and save current location
    if (user) {
        return children;
    }
   
    return <Navigate to="/login" state={{ from: location}} replace></Navigate>;
};

export default PrivateRoute;