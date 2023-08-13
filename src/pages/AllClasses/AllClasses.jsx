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
            fetch('https://ninja-kung-fu-server.vercel.app/selected_classes', {
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
            <h1 className='text-center font-Poppins text-6xl py-10  font-semibold text-[#36D399]'>All Classes</h1>

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