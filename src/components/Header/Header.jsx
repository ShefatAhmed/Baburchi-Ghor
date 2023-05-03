import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning-subtle bg-opacity-50 py-1 rounded">
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand fw-bold text-xl fs-1">Khadok.ViPERS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/blog">Blog</Link>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center'>
                            <div>
                                {
                                    user && (<img src={user.photoURL} className="rounded-circle me-3" width="40px" alt="..." />)
                                }
                            </div>
                            <div>
                                {
                                    user ? (<button className="btn btn-danger px-3" onClick={handleLogout}> Log out</button>) : (<Link to="/login" className="btn btn-danger px-3">Login</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;


