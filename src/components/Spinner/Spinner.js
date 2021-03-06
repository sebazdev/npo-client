import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.css';

const Spinner = ( { timeout = 0 } ) => {

    return (
        <Loader
            className='spinner'
            type="TailSpin"
            color="#808080"
            timeout={ timeout }
        />
    )

}

export default Spinner;
