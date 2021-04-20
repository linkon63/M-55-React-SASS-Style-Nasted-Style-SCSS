import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <p>SCSS REGULAR</p>
            </div>
            <div className='home-container2'>
                <p>SCSS LARGE</p>
                <p>SCSS EXTRA LARGE</p>
            </div>
        </div>
    );
};

export default Home;