import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const styles = {
        backgroundColor: '#e2ded3',
    };
    return (
        <div style={styles}>
            <div>
                <div className="navbar">
                    <div className="flex-1">
                        <p className=" btn btn-ghost normal-case text-xl">
                            Khadok.ViPERS
                        </p>
                        <div>
                        </div>
                        <div className='text-center mx-auto g-5 text-pink-700'>
                            <Link className='ms-8 text-center btn btn-ghost  font-extrabold'>Home</Link>
                            <Link to="/blog" className='ms-8 text-center btn btn-ghost  font-extrabold'>Blog</Link>
                            <Link className='ms-8 text-center btn btn-ghost  font-extrabold'>Home</Link>
                        </div>
                    </div>
                    <div className="flex-none">
                        <div>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;