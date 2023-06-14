import React from 'react';
import useAxiosSecure from '../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';
import useAdmin from '../../customeHocks/useAdmin';
import useInstructor from '../../customeHocks/useInstructor';

const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/approved_class`)
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }

    const handleSelectedClass =()=>{
        console.log("handleSelectedClass");
    }
    
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-Montserrat text-6xl py-10  font-semibold text-[#36D399]'>All Classes</h1>

            <div className='grid grid-cols-3 gap-10'>
                {
                    classes.map((priod) =>
                        <div key={priod._id} className={`card  bg-base-100 shadow-xl   ${priod?.availableSeats == 0 ? 'bg-red-600' : ''}`}>
                            <figure><img src={priod?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span>Class Name : </span>{priod?.className}</h2>
                                <p><span>Instructor name : </span>{priod?.name}</p>
                                <p><span>Available seats : </span>{priod?.availableSeats}</p>
                                <p><span>Price : </span>{priod?.price}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary w-full"
                                     disabled={priod?.availableSeats == 0 || (isAdmin || isInstructor)}
                                    onClick={handleSelectedClass}>Select Class</button>
                                </div>
                               
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllClasses;