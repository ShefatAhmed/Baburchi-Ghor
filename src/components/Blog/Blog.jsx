import React from 'react';

const Blog = () => {
    return (
        <div className='text-center p-5'>
            <div className='bg-info-subtle p-3'>
                <h4>1. What is the differences between uncontrolled and controlled components?</h4>
                <p className='p-3'>In React, controlled components are those whose state is managed by React, while uncontrolled components manage their own state. Controlled components provide more control and predictability, while uncontrolled components are simpler to implement.
                </p>
            </div>
            <div className='bg-info-subtle p-3 mt-3'>
                <h4>2. How to validate React props using PropTypes?</h4>
                <p className='p-3'>To validate React props using PropTypes, you need to import the PropTypes library and define the expected type and shape of each prop in your component. This is done by adding a static propTypes object to the component.
                </p>
            </div>
            <div className='bg-info-subtle p-3 mt-3'>
                <h4>3. What is the difference between nodejs and express js?</h4>
                <p className='p-3'>A custom hook is a function that encapsulates reusable logic in a React component. You can create a custom hook to abstract and simplify complex logic, making it easier to reuse and share between different components.
                </p>
            </div>
            <div className='bg-info-subtle p-3 mt-3'>
                <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                <p className='p-3'>A custom hook is a reusable function that encapsulates complex logic in a React component. It helps to abstract and simplify logic, making it easier to maintain and reuse code. You can create a custom hook to share logic between different components.
                </p>
            </div>
        </div>
    );
};

export default Blog;