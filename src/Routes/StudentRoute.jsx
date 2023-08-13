import React from 'react';
import useAuth from '../customeHocks/useAuth';
import useAdmin from '../customeHocks/useAdmin';
import { useLocation } from 'react-router-dom';
import useInstructor from '../customeHocks/useInstructor';

const StudentRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoding] = useInstructor();
   

    if(loading && (!isAdminLoading && !isInstructorLoding)){
        return <progress className="progress w-56"></progress>
    }

    if (user && (!isAdmin && !isInstructor)) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;