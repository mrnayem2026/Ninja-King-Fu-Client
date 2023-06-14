import React from 'react';
import { FaSchool, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { FcManager } from "react-icons/fc";
import { BsMortarboardFill,BsBuildingAdd } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { NavLink, Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Dashboard = () => {
    // ! TODO : Admin and Instructor dynamic korte hobe  
    const isAdmin =true ;
    const instructors =false ;

    return (
        <div className="drawer lg:drawer-open bg-[#FFFFFF]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-black rounded-3xl ml-5 shadow-[6px_15px_15px_10px_#00000024]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40  ">
                    {
                        isAdmin ? (
                            <>
                                <li><NavLink to="/dashboard/manage_users"  > <BsMortarboardFill className='w-8 h-8'></BsMortarboardFill>Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manage_classes" ><HiUsers className='w-8 h-8'></HiUsers> Manage Classes</NavLink></li>
                            </>
                        ) : instructors ? (
                            <>
                                <li><NavLink to="/dashboard/add_class"><BsBuildingAdd className='w-8 h-8'></BsBuildingAdd>Add Class </NavLink></li>
                                <li><NavLink to="/dashboard/my_classes"><FaCalendarAlt className='w-8 h-8'></FaCalendarAlt> My Classes </NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                        )
                    }
                    <div className="divider"></div>

                    <li className='text-center my-2'><NavLink to="/" data-tooltip-id="my-main-home" data-tooltip-content="Home"><FaHome className='w-8 h-8'></FaHome> Home </NavLink> </li>
                    <Tooltip id="my-main-home" />
                    <li className='text-center my-2'><NavLink to="/instructors" data-tooltip-id="my-Instructors" data-tooltip-content="Instructors"><FcManager className='w-8 h-8'></FcManager>Instructors</NavLink></li>
                    <Tooltip id="my-Instructors" />
                    <li className='text-center my-2'><NavLink to="/all_classes" data-tooltip-id="my-class" data-tooltip-content="Classes"><FaSchool className='w-8 h-8'></FaSchool>Classes</NavLink></li>
                    <Tooltip id="my-class" />
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;