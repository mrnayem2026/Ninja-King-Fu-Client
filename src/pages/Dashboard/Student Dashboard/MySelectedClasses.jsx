import React from 'react';
import useSelectedClass from '../../../customeHocks/useSelectedClass';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const [selectedClass,refetch] = useSelectedClass();

    // console.log(selectedClass[0].selectedClassId);
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
<<<<<<< HEAD
                fetch(`https://ninja-kung-fu-server.vercel.app/selected_classes/${item._id}`, {
=======
                fetch(`http://localhost:3000/selected_classes/${item._id}`, {
>>>>>>> 6e43a99 (Banner section upgrade all most done)
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handlePay = () => {
       console.log("From pay btn");
    }

    return (
        <div className='text-black w-full p-10'>
            <div className='w-52 h-28 bg-[#F5F5F7] flex items-center justify-center rounded-xl gap-3'>
                <h1> <span className='text-3xl font-Montserrat font-semibold'>Total <br />Users </span> </h1>
                <span className='text-7xl font-Montserrat font-semibold'>{selectedClass?.length}</span>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-xl font-HindVadodara font-bold text-black'>#</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>class Name</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Instructor Name</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Price</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Available Seats</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Delete</th>
                            <th className='text-xl font-HindVadodara font-bold text-black'>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            selectedClass.map((selecteClass, index) =>
                                <tr key={selecteClass._id}>
                                    <th>{index + 1}</th>
                                    <td>{selecteClass.selectedClassId.className}</td>
                                    <td>{selecteClass.selectedClassId.name}</td>
                                    <td>{selecteClass.selectedClassId.price}</td>
                                    <td>{selecteClass.selectedClassId.availableSeats}</td>
                                    <td><button onClick={() => handleDelete(selecteClass)} className="btn btn-outline text-lg font-Montserrat font-extrabold">Delete</button></td>
                                    <td><button onClick={() => handlePay()} className="btn btn-outline text-lg font-Montserrat font-extrabold">Pay</button></td>
                                </tr>
                            )


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;