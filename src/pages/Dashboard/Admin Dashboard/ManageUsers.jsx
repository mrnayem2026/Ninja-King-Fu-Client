import React from 'react';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const [disabledButtons, setDisabledButtons] = useState([]);
    const [instructorDisabledButtons, setinstructorDisabledButtons] = useState([]);

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA" />
        </div>
    }

    const handleMakeAdmin = (user, index) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(response => {
                if (response.data.modifiedCount) {
                    refetch();
                    const updatedDisabledButtons = disabledButtons.slice();
                    updatedDisabledButtons[index] = true;

                    setDisabledButtons(updatedDisabledButtons);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // Handle any error that occurs during the request
                console.error(error);
            });
    }
    const handleMakeInstructor = (user, index) => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
            .then(response => {
                if (response.data.modifiedCount) {
                    refetch();
                    const updatedDisabledButtons = instructorDisabledButtons.slice();
                    updatedDisabledButtons[index] = true;

                    setinstructorDisabledButtons(updatedDisabledButtons);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is a Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // Handle any error that occurs during the request
                console.error(error);
            });
    }




    return (
        <div className='text-black w-full p-10'>
            <div className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3'>
                <h1> <span className='text-3xl font-Montserrat font-semibold'>Total <br />Users </span> </h1>
                <span className='text-7xl font-Montserrat font-semibold'>{users.length}</span>
            </div>
            {
                console.log(users)
            }
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl font-HindVadodara font-bold text-black'>#</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Name</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Email</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Make Instructor</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handleMakeInstructor(user, index)} disabled={instructorDisabledButtons[index]} className="btn btn-outline text-lg font-Montserrat font-extrabold">Instructor</button></td>
                                    <td><button onClick={() => handleMakeAdmin(user, index)} disabled={disabledButtons[index]} className="btn btn-outline text-lg font-Montserrat font-extrabold">admin</button></td>
                                </tr>
                            )


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;