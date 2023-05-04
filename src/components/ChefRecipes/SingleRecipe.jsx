import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleRecipe = ({ data }) => {
    const handleClick = (event) => {
        event.target.disabled = true;
        toast('Recipe has been added to favorites');
    };
    const { img, name, bio, like, experience, numberOf_recipe, recipe1, cooking_method1, ingredients1, recipe2, cooking_method2, ingredients2, recipe3, cooking_method3, ingredients3, ratings1, ratings2, ratings3 } = data;
    return (
        <div className='p-5 shadow-lg'>
            <div className="card shadow-lg">
                <div className="row g-0">
                    <div className="col-md-4 mt-5 ">
                        <img src={img} className="img-fluid mt-5 rounded-5 shadow-lg" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> <span className='fw-bold'>Name:</span> {name}</h5>
                            <p className="card-text">Bio: {bio}</p>
                            <div>
                                <div className='row row-cols-1 row-cols-md-3 p-3'>
                                    <div className='border border-danger rounded-5 p-5'>
                                        <h6><span className='fw-bold'>Recipe Name:</span> {recipe1}</h6>
                                        <p><span className='fw-bold'>Ingredients:</span> {ingredients1}</p>
                                        <p><span className='fw-bold'>Cooking Method:</span> {cooking_method1}</p>
                                        <p><i className="fa-regular fa-star text-warning" /> Ratings: {ratings1}/5 (500+)</p>
                                        <button onClick={handleClick} className='btn btn-danger text-white w-100'>Favourite</button>
                                    </div>
                                    <div className='border border-danger rounded-5 p-5'>
                                        <h6><span className='fw-bold'>Recipe Name:</span> {recipe2}</h6>
                                        <p><span className='fw-bold'>Ingredients:</span> {ingredients2}</p>
                                        <p><span className='fw-bold'>Cooking Method:</span> {cooking_method2}</p>
                                        <p><i className="fa-regular fa-star text-warning" /> Ratings: {ratings2}/5 (500+)</p>
                                        <button onClick={handleClick} className='btn btn-danger text-white w-100'>Favourite</button>
                                    </div>
                                    <div className='border border-danger rounded-5 p-5'>
                                        <h6><span className='fw-bold'>Recipe Name:</span> {recipe3}</h6>
                                        <p><span className='fw-bold'>Ingredients:</span> {ingredients3}</p>
                                        <p><span className='fw-bold'>Cooking Method:</span> {cooking_method3}</p>
                                        <p><i className="fa-regular fa-star text-warning" /> Ratings: {ratings3}/5 (500+)</p>
                                        <button onClick={handleClick} className='btn btn-danger text-white w-100'>Favourite</button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <p><i className="fa-regular fa-thumbs-up" /> {like}</p>
                                <p>Total Recipe: {numberOf_recipe}</p>
                                <p>Experience: {experience} years+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleRecipe;