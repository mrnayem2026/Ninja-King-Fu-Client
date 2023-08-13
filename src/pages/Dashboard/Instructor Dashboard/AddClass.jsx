import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../customeHocks/useAuth';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {


    const { register, handleSubmit, reset ,formState: { errors }} = useForm();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

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
                    const { name, price, email, className,availableSeats } = data;
                    const newClass = { name, price: parseFloat(price), email, className,availableSeats, image: imgURL }
                    console.log(newClass)
                    axiosSecure.post('/class', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className='text-black w-full p-10'>
            <h1 className='text-4xl font-Oswald font-medium text-center'>Add your Class</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='pt-16'>
                <div className='flex justify-between gap-5'>
                    <div className="form-control mb-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name" defaultValue={user?.displayName ? user?.displayName : "UnKown Person"} readOnly
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full text-white" />
                    </div>
                    <div className="form-control mb-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor email*</span>
                        </label>
                        <input type="email" defaultValue={user?.email ? user?.email : "xyz@gmail.com"} readOnly placeholder="Instructor email"
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
                <input className="btn btn-sm mt-4  w-full text-2xl font-Poppins font-medium" type="submit" value="Add a Class" />
            </form>
        </div>
    );
};

export default AddClass;