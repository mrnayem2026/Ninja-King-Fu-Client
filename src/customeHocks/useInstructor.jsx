import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoding} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/${user?.email}`);
            console.log('is Instructor response', res)
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoding]
}
export default useInstructor;