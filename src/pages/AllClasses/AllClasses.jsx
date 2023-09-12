import React from 'react';
import useAdmin from '../../customeHocks/useAdmin';
import useInstructor from '../../customeHocks/useInstructor';
import useAxiosSecure from '../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';
import useAuth from '../../customeHocks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AllClasses = () => {
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const {user}=useAuth();
    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/approved_class`)
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }

    const handleSelectedClass = (item) => { 
        console.log(item);
        if (user && user?.email) {
            const selectedClass = {selectedClassId: item, email: user.email}
            console.log(selectedClass);
            fetch('https://ninja-kung-fu-server-for-deploy.vercel.app/selected_classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    return (
        <div className='container mx-auto'>
            <div className="text-center py-10">
            <h1 className="text-white text-6xl font-Oswald uppercase font-semibold">All Classes</h1>
            <div className="w-12 h-1 bg-red-500 mx-auto mt-2"></div>
          </div>

            <div className='grid grid-cols-3 gap-10'>
                {
                    classes.map((priod) =>
                        <div key={priod._id} className={`card  bg-base-100 shadow-xl   ${priod?.availableSeats == 0 ? 'bg-red-600' : ''}`}>
                            <figure><img src={priod?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"><span className='font-Oswald font-medium text-3xl text-white'>Class Name : </span> <span className='font-Poppins font-extralight text-white text-xl'>{priod?.className}</span> </h2>
                                <p><span className='font-Oswald font-medium text-3xl text-white'>Instructor name : </span> <span className='font-Poppins font-extralight text-white text-xl'>{priod?.name}</span> </p>
                                <p><span className='font-Oswald font-medium text-3xl text-white'>Available seats : </span> <span className='font-Poppins font-extralight text-white text-xl'>{priod?.availableSeats}</span> </p>
                                <p><span className='font-Oswald font-medium text-3xl text-white'>Price : </span><span className='font-Poppins font-extralight text-white text-xl'>${priod?.price}</span></p>
                                <div className="card-actions ">
                                    <button className="btn btn-outline hover:bg-[#e43d49] text-white text-3xl font-Oswald px-10 border-[#e43d49] hover:border-[#e43d49] hover:text-base-200 transition duration-500 w-full"
                                        disabled={priod?.availableSeats == 0 || (isAdmin || isInstructor)}
                                        onClick={() => handleSelectedClass(priod)}>Select Class</button>
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