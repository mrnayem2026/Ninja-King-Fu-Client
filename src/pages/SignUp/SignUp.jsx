import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useAuth from "../../customeHocks/useAuth";
import registerImg from '../../assets/icons/singUp.png';
import github from '../../assets/icons/github.png';
import google from '../../assets/icons/google.png';


const Signup = () => {



    const navigate = useNavigate();
    const location = useLocation();

    const { createUser } = useAuth();


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    const updateUserData = (loggedUser, name, photoUrl) => {
        updateProfile(loggedUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(() => {
            console.log('user name updated')
        })
            .catch(error => {
                setError(error.message);
            })


    }
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
    

    return (
        <div className="mt-20 container mx-auto  flex gap-56" >
            <div>
                <img src={registerImg} alt="" />
            </div>
            {/* Register from strat */}
            <div className="mt-24 bg-gradient-to-tr from-fuchsia-400 to-purple-600 w-2/6 pt-20 p-10 mb-10 ">
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
                        {errors.name && <span className="text-red-600">Name is required</span>}
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

                    </div>

                    {/* password  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                            className={`block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer `}
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Capital Letter and one Special Character.</p>}

                    </div>
                    {/* password  */}
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            id="ConfirmPassword"
                            className={`block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer `}
                            placeholder=" "

                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirm Password
                        </label>

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
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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