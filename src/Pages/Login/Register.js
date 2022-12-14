import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    if (loading || gLoading || updating) {
        return <button className="btn btn-square loading"></button>
    }
    let userNotCreate;
    if (error || gError || updateError) {
        userNotCreate = <p className='text-red-500'>{error?.message || gError?.message || updateError.message}</p>
    }
    if (user || gUser) {
        console.log(user || gUser);
    }
    const onSubmit = async(data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        alert('Updated profile');
        navigate('/appoinment')
    };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Please give a valid name'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Please give a valid email'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Please give a valid email'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Give atleast 6 character' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>
                        {userNotCreate}
                        <input className="btn btn-accent w-full max-w-xs" type="submit" value="Sign Up" />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link to='/login' className='text-primary'>Login</Link></small></p>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-success">SignIn_Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;