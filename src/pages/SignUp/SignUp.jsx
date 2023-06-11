import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useAuth from "../../customeHocks/useAuth";
import registerImg from '../../assets/icons/singUp.png';
import github from '../../assets/icons/github.png';
import google from '../../assets/icons/google.png';
import { useState } from "react";
import Swal from "sweetalert2";


const Signup = () => {

    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [confirmPasswordErrorForConfirm, setConfirmPasswordErrorForConfirm] = useState("")
    const [firebaseError, setFrebaseError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const { createUser, updateUserProfile } = useAuth();


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password == data.confirmPassword) {
            console.log("Success");
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data.photoURL)
                        .then(()=> {
                            setFrebaseError("")
                        })
                        .catch(error => setFrebaseError(error.message))

                        if (result.user) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                })
                .catch(error => setFrebaseError(error.message))

            setConfirmPasswordError("")
        } else {
            setConfirmPasswordError("Password and Confirm Password don't match");
        }
    };




    // Google signin 

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate("/");
            })
            .catch(error => {
                console.log(error)
            })
    }

    // GitHub SignIn 
    const handleGitHubSignIn = () => {
        singInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                navigate("/");
            })
            .catch(error => {
                console.log(error)
            })
    }

     // Hide password 
     const handlePasswordHide = () => {
        setShowPassword(!showPassword)
    }
     // Hide password for confirm
     const handlePasswordHideForConfirm = () => {
        setConfirmPasswordErrorForConfirm(!confirmPasswordErrorForConfirm)
    }


    return (
        <div className="mt-20 container mx-auto  flex gap-56" >
            <div>
                <img src={registerImg} alt="" />
            </div>
            {/* Register from strat */}
            <div className="mt-24 bg-gradient-to-tr from-fuchsia-400 to-purple-600 w-2/6 pt-20 p-10 mb-10 ">
                <div className="pb-7 text-white">
                    <p>{confirmPasswordError}</p>
                    <p>{firebaseError}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    {/* name  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            {...register("name", { required: true })}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer `}
                            placeholder=" "
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                        {errors.name && <span className="text-white">Name is required</span>}
                    </div>

                    {/* email  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", { required: true })}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer`}
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {errors.email && <span className="text-white">Email is required</span>}
                    </div>

                    {/* password  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                            className={`relative block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer `}
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {
                            showPassword ?
                            <span className="absolute top-2 right-0">
                            <svg onClick={handlePasswordHide}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  text-black cursor-pointer">
                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>

                        </span> : 
                            
                            <span className="absolute top-2 right-0">
                                <svg onClick={handlePasswordHide} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black cursor-pointer">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        }
                        {errors.password?.type === 'required' && <p className="text-white">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-white">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-white">Password must have one Capital Letter and one Special Character.</p>}

                    </div>
                    {/*  Confirm Password  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                             type={confirmPasswordErrorForConfirm ? 'text' : 'password'}
                            name="password"
                            id="ConfirmPassword"
                            {...register("confirmPassword", { required: true, })}
                            className={`block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer `}
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirm Password
                        </label>
                        {
                            confirmPasswordErrorForConfirm ?
                            <span className="absolute top-2 right-0">
                            <svg onClick={handlePasswordHideForConfirm}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  text-black cursor-pointer">
                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                            </svg>

                        </span> : 
                            
                            <span className="absolute top-2 right-0">
                                <svg onClick={handlePasswordHideForConfirm} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black cursor-pointer">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        }
                        {errors.confirmPassword?.type === 'required' && <p className="text-white">Password is required</p>}
                    </div>

                    {/* photoURL  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            id="photo"
                            {...register("photoURL", { required: true })}
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer`}
                            placeholder=" "
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Image URL
                        </label>
                        {errors.photoURL && <span className="text-white">Photo URL is required</span>}
                    </div>

                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className="flex gap-5 ">
                            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary  rounded-full h-10'><img src={google} alt="google icon" className='w-10  pr-2 text-center' /></button>
                            <button onClick={handleGitHubSignIn} className='btn  btn-outline btn-primary rounded-full '><img src={github} alt="github icon" className='w-10 pr-2 ' /></button>
                        </div>
                        <button className="btn btn-outline btn-primary text-3xl  font-BebasNeue px-10"><span className="text-white">sign up</span></button>
                    </div>

                    <p className="text-black py-5">
                        Have an account?{" "}
                        <Link to="/login" state={location.state} className="link">
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
            {/* Registerfrom end */}
        </div>
    );
};

export default Signup;