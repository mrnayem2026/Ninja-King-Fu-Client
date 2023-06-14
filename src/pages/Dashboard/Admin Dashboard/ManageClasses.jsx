import React from 'react';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import useAuth from '../../../customeHocks/useAuth';
import { HashLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: allClasse = [], refetch, isLoading } = useQuery(['allClasse'], async () => {
        const res = await axiosSecure.get(`/all_class`)
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }
    return (
        <div className=' p-10'>
            <div className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3 my-4'>
                <h1> <span className='text-3xl font-Montserrat font-semibold'>Total <br />Classes </span> </h1>
                <span className='text-7xl font-Montserrat font-semibold'>{allClasse?.length}</span>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    allClasse.map((priod) =>
                        <div key={priod._id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={priod?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span>Class Name : </span>{priod?.className}</h2>
                                <p><span>Instructor name : </span>{priod?.name}</p>
                                <p><span>Instructor email : </span>{priod?.email}</p>
                                <p><span>Available seats : </span>{priod?.availableSeats}</p>
                                <p><span>Price : </span>{priod?.price}</p>
                                <p><span>Total Enrolled Students : </span>0</p>
                                <p><span>Status : </span><div className="badge badge-secondary">{priod?.status ? priod?.status : "pending"}</div></p>

                                    <div className="card-actions ">
                                        <button className="btn btn-primary w-full" onClick={() => {
                                            setClassId(priod._id);
                                            window.my_modal_4.showModal();
                                        }}>Approve</button>
                                    </div>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary w-full" onClick={() => {
                                            setClassId(priod._id);
                                            window.my_modal_4.showModal();
                                        }}>Deny</button>
                                    </div>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary w-full" onClick={() => {
                                            setClassId(priod._id);
                                            window.my_modal_4.showModal();
                                        }}>Send Feedback</button>
                                    </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageClasses;