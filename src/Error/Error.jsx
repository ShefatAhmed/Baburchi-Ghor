import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Container className="text-center my-5">
                <Row>
                    <Col>
                        <h1>Oops! Page not found</h1>
                        <p>The page you are looking for does not exist.</p>
                        <img className='w-50'
                            src="https://i.ibb.co/9pDLLfK/abstract-glitch-background-404-royalty-free-illustration-1679362904.jpg"
                            alt="404 Error Image"
                        />
                    </Col>
                </Row>
                        <Link to="/" className='mt-5 btn btn-danger'>Go Back Home</Link>
            </Container>
        </div>
    );
};

export default Error;