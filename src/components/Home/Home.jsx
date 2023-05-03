import React from 'react';

const Home = () => {
    return (
        <div>
            <section className='mt-3 d-flex align-items-center justify-content-around'>
                <div>
                    <img src="https://i.ibb.co/yktg7mW/Haleem-2.jpg" className='rounded-circle shadow-lg p-1 mb-5 bg-body-tertiary rounded' alt="" />
                </div>
                <div className='text-end'>
                    <h1 className='fw-bold text-danger'>Bangladeshi <span className='text-success'>All</span> Chef</h1>
                    <h3 className='fst-italic fw-bold'>Is Here</h3>
                    <button className='btn btn-danger px-5'>Hire our chef</button>
                </div>
            </section>
            <section className='p-5'>
                <h1 className='fw-bold text-center fst-italic text-black-50'>Chefs in real life during their work</h1>
                <div id="carouselExampleAutoplaying" className="carousel slide  rounded-pill" data-bs-ride="carousel">
                    <div className="carousel-inner rounded-pill">
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
        </div>
    );
};

export default Home;