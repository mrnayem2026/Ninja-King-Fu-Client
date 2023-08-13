import React from 'react';
import useAxiosSecure from '../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';

const PopularInstructors  = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch, isLoading } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get(`/all_instructor`)
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }
    return (
        <div className='container mx-auto py-10'>
        <h1 className='text-center font-Poppins text-6xl py-10  font-semibold text-[#36D399]'>Popular Instructors</h1>

        <div className='grid  lg:grid-cols-3 gap-10'>
            {
                instructors.slice(0, 6).map((instructor) =>
                    <div key={instructor._id} className={`card  bg-base-100 shadow-2xl shadow-blue-500/20`}>
                        <figure><img src={instructor?.photoURL} alt="instructor displayName" /></figure>
                        <div className="card-body">
                            <p><span>Instructor name : </span>{instructor?.displayName}</p>
                            <p><span>Email : </span>{instructor?.email}</p>                              
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default PopularInstructors ;