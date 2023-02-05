import React from 'react';
import classes from './PriceBlock.module.css';

const PriceBlock = ({buyPrice, returnPrice}) => {
    return (
        <div className={classes.priceBlock}>
            <div className={[classes.buyPriceBlock, classes.priceHalfBlock].join(' ')}>
                <div>
                    <span className={classes.priceBlockTitle}>Buy Price</span>
                    <br/>
                    <span className={classes.priceBlockValue}>{buyPrice}<small> ETH</small></span>
                </div>
            </div>
            <div className={[classes.returnPriceBlock, classes.priceHalfBlock].join(' ')}>
                <div>
                    <span className={classes.priceBlockTitle}>Return Price</span>
                    <br/>
                    <span
                        className={classes.priceBlockValue}>{returnPrice}<small> ETH</small></span>
                </div>
            </div>
        </div>

    );
};

export default PriceBlock;