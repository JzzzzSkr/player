import React from 'react';
import './Home.scss'
import Search from './SearchBar/Search';
import MainContent from './MainContent';

const Home = () => {
    return (
        <div className='homeWrapper'>
            <Search></Search>
            <MainContent></MainContent>
        </div>
    );
}

export default Home;
