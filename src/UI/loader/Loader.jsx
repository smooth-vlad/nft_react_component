import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={[classes.loader, 'centered'].join(' ')}/>
    );
};

export default Loader;