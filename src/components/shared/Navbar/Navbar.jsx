import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon, } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import logo from '../../../assets/icons/logo.png'






const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='top-0'>
            <nav className='relative container  mx-auto flex justify-between  my-7 '>
                <Link to='/'>
                    {/* <h1 className='font-BebasNeue text-5xl'>Action World</h1> */}
                    <img src={logo} alt="" width='75px' height='75px' />
                </Link>

                <div>
                    {/* Nav Items Section for lerge device start*/}
                    <ul className='text-xl font-medium  items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/instructors'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/classes'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/dashboards'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                               <button className="btn btn-outline btn-primary text-3xl font-mono px-10">Login</button>
                            </NavLink>
                        </li>
                    </ul>
                    {/* Nav Items Section for lerge device End*/}

                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <h1 className='font-BebasNeue text-5xl text-black'>Action World</h1>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/all_toys'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    All Toys
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;