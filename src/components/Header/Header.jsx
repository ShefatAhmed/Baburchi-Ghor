import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning-subtle bg-opacity-50 py-1 rounded mx-2 mt-2">
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand fw-bold text-xl fs-1">Khadok.ViPERS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-5">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/blog">Blog</Link>
                            </li>
                        </ul>
                        <div>
                            <img src="..." className="rounded-circle" alt="..." />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;