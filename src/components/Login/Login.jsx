import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const [error, setError] = useState('');
    const { signIn , signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    // google

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGithublogin = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <section>
                <div className="container mt-5 pt-5">
                    <div className="row ">
                        <div className="col-12 col-sm-7 col-md-6 m-auto">
                            <div className="card border-0 shadow">
                                <div className="card-body  pt-5">
                                    <p className='text-center fs-1 fw-bold'>Please Login!!</p>
                                    <form onSubmit={handleLogin} action="">
                                        <input type="email" name="email" id="" className="form-control my-4 py-2" placeholder="Enter your email" required />
                                        <input type="password" name="password" id="" className="form-control my-4 py-2" placeholder="Password" />
                                        <div className="text-center mt-3">
                                            <button className="btn btn-primary px-5 ">Login</button>
                                        </div>
                                        <div className="text-center my-2">
                                            <Link to="/register" >
                                                <small>don’t have an account? Register here</small>
                                            </Link>
                                        </div>
                                        <p>{error}</p>
                                    </form>
                                </div>
                                <div className='text-center'>
                                    <p className='fs-5 fw-bold'>Or</p>
                                    <hr className='mx-5' />
                                    <div className='d-flex flex-column-reverse p-4'>
                                        <button type="button" className="btn btn-outline-success mb-2" onClick={handleGoogleSignIn} ><i className="fa-brands fa-google"></i> Sign in With Google</button>
                                        <button type="button" className="btn btn-outline-success mb-2" onClick={handleGithublogin}><i className="fa-brands fa-github"></i> Sign in with Github</button>
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