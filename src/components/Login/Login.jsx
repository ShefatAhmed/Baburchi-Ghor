import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <section>
                <div className="container mt-5 pt-5">
                    <div className="row ">
                        <div className="col-12 col-sm-7 col-md-6 m-auto">
                            <div className="card border-0 shadow">
                                <div className="card-body  pt-5">
                                    <p className='text-center fs-1 fw-bold'>Please Login!!</p>
                                    <form action="">
                                        <input type="email" name="" id="" className="form-control my-4 py-2" placeholder="Enter your email" />
                                        <input type="password" name="" id="" className="form-control my-4 py-2" placeholder="Password" />
                                        <div className="text-center mt-3">
                                            <button className="btn btn-primary px-5 ">Login</button>
                                        </div>
                                        <div className="text-center my-2">
                                            <Link to="/register" >
                                                <small>don’t have an account? Register here</small>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className='text-center'>
                                    <p className='fs-5 fw-bold'>Or</p>
                                    <hr className='mx-5' />
                                    <div className='d-flex flex-column-reverse p-4'>
                                        <button type="button" className="btn btn-outline-success mb-2"><i class="fa-brands fa-google"></i> Sign in With Google</button>
                                        <button type="button" className="btn btn-outline-success mb-2"><i class="fa-brands fa-github"></i> Sign in with Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;