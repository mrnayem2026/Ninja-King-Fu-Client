import React from 'react';
import { useForm } from 'react-hook-form';

const AddClass = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

    };

    return (
        <div className='text-black w-full p-10'>
            <h1 className='text-4xl font-Kanit font-medium text-center'>Add your Class</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='pt-16'>
                <div className='flex justify-between gap-5'>
                    <div className="form-control mb-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full text-white" />
                    </div>
                    <div className="form-control mb-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor email*</span>
                        </label>
                        <input type="text" placeholder="Instructor email"
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
                <input className="btn btn-sm mt-4  w-full text-2xl font-Montserrat font-medium" type="submit" value="Add a Class" />
            </form>
        </div>
    );
};

export default AddClass;