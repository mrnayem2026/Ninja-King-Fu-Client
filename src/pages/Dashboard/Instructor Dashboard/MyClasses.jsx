import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../customeHocks/useAuth';
import { HashLoader } from 'react-spinners';

const MyClasses = () => {

    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/class?email=${user?.email}`)
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <div className=' p-10'>
            <div className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3 my-4'>
                <h1> <span className='text-3xl font-Montserrat font-semibold'>Total <br />Classes </span> </h1>
                <span className='text-7xl font-Montserrat font-semibold'>{classes?.length}</span>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    classes.map((priod) =>
                        <div key={priod._id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={priod?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span>Class Name : </span>{priod?.className}</h2>
                                <p><span>Instructor name : </span>{priod?.name}</p>
                                <p><span>Total Enrolled Students : </span>0</p>
                                <p><span>Status : </span><div className="badge badge-secondary">{priod?.status ? priod?.status : "pending"}</div></p>
                                <p>Feedback</p> <span>---------</span>
                                <p>No Feedback</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary w-full" onClick={() => window.my_modal_4.showModal()}>Update Class</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="modal-box w-11/12 max-w-5xl pt-16">

                    <div className='flex justify-between gap-5'>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name*</span>
                            </label>
                            <input type="text" placeholder="Instructor name" defaultValue={user?.displayName} readOnly
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                        </div>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor email*</span>
                            </label>
                            <input type="email" defaultValue={user?.email} readOnly placeholder="Instructor email"
                                {...register("email", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                        </div>
                    </div>

                    <div className='flex justify-between gap-5'>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Class name*</span>
                            </label>
                            <input type="text" placeholder="Class name"
                                {...register("className", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                        </div>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats*</span>
                            </label>
                            <input type="number" placeholder="Available seats"
                                {...register("availableSeats", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                        </div>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Price"
                                {...register("price", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                        </div>
                    </div>


                    <div className="form-control w-full my-4 relative cursor-pointer  text-white py-2 px-24 rounded btn  text-xl font-Poppins font-semibold">
                        <label className="label">
                            <span className="label-text absolute">Choose a Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="opacity-0 absolute  file-input file-input-bordered w-full " />
                    </div>
                    <input className="btn btn-sm mt-4  w-full text-2xl font-Montserrat font-medium" type="submit" value="UpDate Class" />
                   
                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn" onClick={(e) => { e.preventDefault(); window.my_modal_4.close(); }}>Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default MyClasses;