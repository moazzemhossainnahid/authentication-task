import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import AuthImg from "../../../assets/auth_key.webp";
import Loading from '../../Loading/Loading';
import auth from '../../../../Fiebase.init';

const SignIn = () => {
    const [isChecked, setIsChecked] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    let singInError;

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";

    useEffect(() => {
        navigate(from, { replace: true });
    }, [user, from, navigate]);

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        singInError = <p className="text-error">{error?.message}</p>;
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    const handleChecked = (event) => {
        if (event.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };
    return (
        <div className='bg-[#ffffff] py-5 w-full h-full'>
            <div className="bg-secondary w-full md:w-4/5 mx-auto p-5 md:p-7 rounded-xl">
                <div className="flex items-center flex-col w-full md:flex-row gap-2">
                    <div className="grid flex-grow h-full w-full md:w-3/6 mx-auto card rounded-box place-items-center">
                        <div className="">
                            <img src={AuthImg} alt="Auth_Image" className="" />
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow h-full w-full md:w-3/6 mx-auto card rounded-box place-items-center">
                        <div className="text-left w-full">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                action="#"
                                className="flex flex-col space-y-5"
                            >
                                <div className="flex flex-col space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is require",
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: "Provide a valid Email",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === "required" && (
                                            <span className="label-text-alt text-red-700">
                                                {errors.email.message}
                                            </span>
                                        )}
                                        {errors.email?.type === "pattern" && (
                                            <span className="label-text-alt text-red-700">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-semibold text-gray-900"
                                        >
                                            Password
                                        </label>
                                        <Link
                                            to={"/reset"}
                                            className="text-sm text-[#A25BF7] hover:underline focus:text-blue-800"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="px-4 py-2 transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is require",
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Must be 6 characters or longer",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === "required" && (
                                            <span className="label-text-alt text-red-700">
                                                {errors.password.message}
                                            </span>
                                        )}
                                        {errors.password?.type === "minLength" && (
                                            <span className="label-text-alt text-red-700">
                                                {errors.password.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        onChange={handleChecked}
                                        type="checkbox"
                                        id="red-checkbox"
                                        className="w-4 h-4 cursor-pointer transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        i agree to <span className="text-red-500">Terms & Conditions</span>
                                    </label>
                                </div>
                                <div>
                                    {singInError}

                                    <button
                                        disabled={!isChecked}
                                        type="submit"
                                        className="w-full disabled:bg-gradient-to-tr disabled:from-slate-300 disabled:to-slate-500 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gradient-to-r from-[#4828A9] to-[#A25BF7] rounded-md shadow  hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
                                    >
                                        SignIn
                                    </button>

                                    <p className="text-gray-500">
                                        New Here?{" "}
                                        <Link to="/signup" className=" text-light text-[#A25BF7]">
                                            Create New Account
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;