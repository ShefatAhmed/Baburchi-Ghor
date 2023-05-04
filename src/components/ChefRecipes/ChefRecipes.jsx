import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';

const ChefRecipes = () => {
    const {id} = useParams();
    const singledata = useLoaderData();
    return (
        <div>
            {
                singledata.map(data => <SingleRecipe
                data={data}
                key={data.id}
                ></SingleRecipe>)
            }
        </div>
    );
};

export default ChefRecipes;