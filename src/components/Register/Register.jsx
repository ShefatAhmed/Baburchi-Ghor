import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='row'>
            <form className="col-12 col-sm-7 col-md-4 m-auto border border-5 p-4 mt-5  bg-white">
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Photo URL</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Accpet terms and condition</label>
                </div>
                <button type="submit" className="btn btn-outline-success px-5">Submit</button>
                <div className="my-2">
                    <Link to="/login" >
                        <small>allready have an account ? please log in</small>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;