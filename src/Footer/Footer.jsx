import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <footer className="bg-warning-subtle mt-5 py-2">
                <Container>
                    <section className="container py-5">
                        <div className="row row-cols-2 row-cols-md-3">
                            <div className="col">
                                <h1 className='fw-bold'><span className='text-danger'>Baburchi</span>Ghor</h1>
                                <p className="fw-semibold">As a catering service provider, our responsibilities include ensuring the quality and safety of the food we serve, timely delivery, and excellent customer service. We prioritize meeting dietary restrictions and preferences while accommodating special requests.</p>
                            </div>
                            <div className="col">
                                <h5>Usefull Link</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/" className="link-secondary">Home</Link></li>
                                    <li><Link to="/blog" className="link-secondary">Blog</Link></li>
                                    <li><Link to="/login" className="link-secondary">Login</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5>Contact Us</h5>
                                <div className="">
                                    <p>Email: BaburchiGhor@gmail.com</p>
                                    <p>Phone: +8801002485622</p>
                                    <p>Address: 24/7 taltola, kathalganj, Bangladesh</p>
                                    <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <div className="text-center text-muted">
                        <p>&copy; {new Date().getFullYear()} BaburchiGhor</p>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;