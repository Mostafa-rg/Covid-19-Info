import React from 'react';

// Gif 
import spinner from '../gif/Spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading"/>
        </div>
    );
};

export default Loader;