import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selecteClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected_classes?email=${user?.email}`)
            return res.data;
        },
    })

    return [selectedClass, refetch]

}
export default useSelectedClass;