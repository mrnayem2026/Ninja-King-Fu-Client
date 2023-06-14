import { Navigate, useLocation } from "react-router";
import useInstructor from "../customeHocks/useInstructor";
import useAuth from "../customeHocks/useAuth";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoding] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoding){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;