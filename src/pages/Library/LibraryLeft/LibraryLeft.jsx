import React from 'react';
import './LibraryLeft.scss'
import LibraryTop from './LibraryTop/LibraryTop';
import LibraryMiddle from './LibraryMiddle/LibraryMiddle';
import LibraryBottom from './LibraryBottom/LibraryBottom';

const LibraryLeft = () => {
    return (
        <div className='libraryLeftWrapper'>
            <LibraryTop/>
            <LibraryMiddle/>
            <LibraryBottom/>
        </div>
    );
}

export default LibraryLeft;
