import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../customeHocks/useAuth';
import { HashLoader } from 'react-spinners';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyClasses = () => {
    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const [classId, setClassId] = useState(null);
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
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

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {

            const formData = new FormData();
            formData.append('image', data.image[0])
            fetch(img_hosting_url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgResponse => {
                    if (imgResponse.success) {
                        const imgURL = imgResponse.data.display_url;
                        const { name, price, email, className, availableSeats } = data;
                        const upDateClass = { name, price: parseFloat(price), email, className, availableSeats, image: imgURL }
                        console.log(upDateClass)
                        axiosSecure.put(`/class/${classId}`, upDateClass)
                            .then(data => {
                                if (data.data.matchedCount) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: ' Class Updated successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                                refetch();
                                console.log(data)
                            })
                    }
                })
            window.my_modal_4.close();
            
        } catch (error) {
            console.error(error);
        }
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
                                    <button className="btn btn-primary w-full" onClick={() => {
                                        setClassId(priod._id);
                                        window.my_modal_4.showModal();
                                    }}>Update Class</button>
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
                                {errors.className && <span className="text-red-500">Class Name is required</span>}
                        </div>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats*</span>
                            </label>
                            <input type="number" placeholder="Available seats"
                                {...register("availableSeats", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                                        {errors.availableSeats && <span className="text-red-500">Available seats is required</span>}
                        </div>
                        <div className="form-control mb-4 w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Price"
                                {...register("price", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-white" />
                                
                           {errors.price && <span className="text-red-500">Price is required</span>}
                        </div>
                    </div>


                    <div className="form-control w-full my-4 relative cursor-pointer  text-white py-2 px-24 rounded btn  text-xl font-Poppins font-semibold">
                        <label className="label">
                            <span className="label-text absolute">Choose a Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="opacity-0 absolute  file-input file-input-bordered w-full " />
                        {errors.image && <span className="text-red-500">Image is required</span>}
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