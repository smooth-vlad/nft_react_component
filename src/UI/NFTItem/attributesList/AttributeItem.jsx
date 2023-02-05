import React from 'react';
import classes from './AttributeItem.module.css';

const AttributeItem = ({title, value}) => {
    return (
        <div className={classes.attributeItem}>
            <span className={classes.attributeItemTitle}>{title}</span>
            <span className={classes.attributeItemValue}>{value}</span>
        </div>
    );
};

export default AttributeItem;