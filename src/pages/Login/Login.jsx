import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import singInimg from '../../assets/icons/signIn.png';
import github from '../../assets/icons/github.png';
import google from '../../assets/icons/google.png';
import useAuth from "../../customeHocks/useAuth";

const Login = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signInWithGoogle, singInWithGithub, signIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {console.log(data)};

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

    // one way data binding

    return (
        <div className="mt-20 container mx-auto  flex gap-56 " >
            {/* login from strat */}
            <div className="mt-24 bg-gradient-to-tr from-fuchsia-400 to-purple-600  pt-32 p-10 mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            {...register("email", { required: true })} placeholder=" "
                            name="email"
                            className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer`}
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>

                    <div className="form-control relative z-0  w-full mb-6 group">
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            className={`block py-2.5 px-0  w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer`}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {errors.password && <span className="text-red-600">Password is required</span>}
                    </div>

                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className="flex gap-5 ">
                            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary  rounded-full h-10'><img src={google} alt="google icon" className='w-10  pr-2 text-center' /></button>
                            <button onClick={handleGitHubSignIn} className='btn  btn-outline btn-primary rounded-full '><img src={github} alt="github icon" className='w-10 pr-2 ' /></button>
                        </div>
                        <button className="btn btn-outline btn-primary text-3xl  font-BebasNeue px-10"><span className="text-white">Sign in</span></button>
                    </div>

                    <p className="text-black py-5">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" state={location.state} className="link">
                            Sign up here
                        </Link>
                    </p>
                </form>
            </div>
            {/* login from end */}
            <div>
                <img src={singInimg} alt="" />
            </div>
        </div>
    );
};

export default Login;
