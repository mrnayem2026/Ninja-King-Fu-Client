import React from 'react';
import useAxiosSecure from '../../../customeHocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { HashLoader } from 'react-spinners';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <HashLoader color="#A6ADBA"  />
        </div>
      }


    return (
        <div className='text-black w-full p-10'>
            <div  className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3'>
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, index) => 
                                <tr key={user._id}>
                                    <th>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
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