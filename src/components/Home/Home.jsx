import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <section className='mt-3 d-md-flex align-items-center justify-content-around mx-5'>
                <div className='col-6 col-sm-8 banner-img'>
                    <img src="https://i.ibb.co/yktg7mW/Haleem-2.jpg" className='rounded-circle shadow-lg p-1 mb-5 bg-body-tertiary rounded img-fluid' alt="" />
                </div>
                <div className='text-end rigth-text'>
                    <h1 className='fw-bold text-danger'>Bangladeshi <span className='text-success'>All</span> Chef</h1>
                    <h3 className='fst-italic fw-bold'>Is Here</h3>
                    <button className='btn btn-danger px-5'>Hire our chef</button>
                </div>
            </section>
            <section className='p-5'>
                <h1 className='fw-bold text-center fst-italic text-black-50'>Chefs in real life during their work</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-4">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/mvjVHP5/4.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/MGfqbdx/3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/687WwCy/1-copy.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section>
                <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
                    {
                        data.map(data => <div key={data.id} className="col">
                            <div className="card">
                                <img src={data.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text"></p>
                                    <hr />
                                    <div className='d-flex justify-content-around'>
                                        <p>Experience: {data.experience} years+</p>
                                        <p>Total Recipe: {data.numberOf_recipe}</p>
                                        <p><i className="fa-regular fa-thumbs-up"></i> {data.like}</p>
                                    </div>
                                    <Link className='btn btn-danger' to={`/chefrecipes/${data.id}`}>View Recipes</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;