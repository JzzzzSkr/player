import React from 'react';
import './Library.scss'
import LibraryLeft from './LibraryLeft/LibraryLeft';
import LibraryRight from './LibraryRight/LibraryRight';

const Library = () => {
    return (
        <div className='libraryWarpper'>
            <LibraryLeft></LibraryLeft>
            <LibraryRight></LibraryRight>
        </div>
    );
}

export default Library;
