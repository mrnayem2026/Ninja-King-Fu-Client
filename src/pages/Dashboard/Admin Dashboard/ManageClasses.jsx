import React, { useState } from 'react';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import useAuth from '../../../customeHocks/useAuth';
import { HashLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const ManageClasses = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [disabledBtn, setDisabledBtn] = useState(false)
    const [classId, setClassId] = useState(null);
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

    const handleStatusApprove = async (id) => {
        try {
            setDisabledBtn(true);
            await axiosSecure.patch(`/set_status/${id}`, { status: 'approved' });
            refetch();
        } catch (error) {
            console.log(error);
        } finally {
            setDisabledBtn(false);
        }
    };

    const handleStatusDeny = async (id) => {
        try {
            setDisabledBtn(true);
            await axiosSecure.patch(`/set_status/${id}`, { status: 'denied' });
            refetch();
        } catch (error) {
            console.log(error);
        } finally {
            setDisabledBtn(false);
        }
    };

    const onSubmit = async (data) => {
        try {
          await axiosSecure.patch(`/feedback/${classId}`, { feedback: data.feedback });
          reset();
          // Optionally, you can close the modal here if desired
          window.my_modal_4.close();
          // Refresh the class data
          refetch();
        } catch (error) {
          console.log(error);
        } finally {
          setDisabledBtn(false);
        }
      };




    return (
        <div className=' p-10'>
            <div className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3 my-4'>
                <h1> <span className='text-3xl font-Poppins font-semibold'>Total <br />Classes </span> </h1>
                <span className='text-7xl font-Poppins font-semibold'>{allClasse?.length}</span>
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
                                    <button className="btn btn-primary w-full" disabled={disabledBtn || priod.status === 'approved' || priod.status === 'denied'} onClick={() => handleStatusApprove(priod._id)}>Approve</button>
                                </div>
                                <div className="card-actions ">
                                    <button className="btn btn-primary w-full" disabled={disabledBtn || priod.status === 'approved' || priod.status === 'denied'} onClick={() => handleStatusDeny(priod._id)}>Deny</button>
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

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="modal-box w-11/12 max-w-5xl pt-16">

                    <div className="form-control mb-4 w-full">
                        <label className="label ">
                            <span className="label-text font-semibold text-4xl text-center py-6">Write your Feedback*</span>
                        </label>
                        <textarea placeholder="Write your Feedback"
                            {...register("feedback", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full text-white placeholder:py-7"></textarea>
                    </div>

                    <input className="btn btn-sm mt-4  w-full text-2xl font-Poppins font-medium" type="submit" value="Send Feedback" />

                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn" onClick={(e) => { e.preventDefault(); window.my_modal_4.close(); }}>Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;