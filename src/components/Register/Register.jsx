import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createuser} = useContext(AuthContext);
    const handleSignUp = event => {
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        createuser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                setError('')
                setSuccess('user has created successfully')
                updateUserData(result.user, name , Img);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })    
    }
    const updateUserData = (user, name , Img) => {
        updateProfile(user, {
            displayName: name,
            photoURL: Img
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='row'>
            <form onSubmit={handleSignUp} className="col-12 col-sm-7 col-md-4 m-auto border border-5 p-4 mt-5  bg-white">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" name='name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Photo URL</label>
                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" name='img' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Accpet terms and condition</label>
                </div>
                <button type="submit" className="btn btn-outline-success px-5">Submit</button>
                <div className="my-2">
                    <Link to="/login" >
                        <small>allready have an account ? please log in</small>
                    </Link>
                </div>
                <p>{error}</p>
                <p>{success}</p>
            </form>
        </div>
    );
};

export default Register;