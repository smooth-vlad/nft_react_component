import React, {useRef, useState} from 'react';
import arrowDown from '../../../ArrowDown.svg';
import classes from './CollapsibleTile.module.css'

const CollapsibleTile = ({style, icon, title, child}) => {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const containerRef = useRef();

    function toggleCollapsedState() {
        setIsCollapsed(!isCollapsed)
    }

    function getHeightStyle() {
        return isCollapsed
            ? {height: containerRef?.current?.scrollHeight + 'px'}
            : {height: 32}
    }

    return (
        <div
            className={classes.collapsibleContainer}
            style={{...style, ...getHeightStyle()}}
            ref={containerRef}>

            <div className={classes.collapsibleHeader}
                 onClick={toggleCollapsedState}>

                <img src={icon} className={classes.iconSmall}/>

                <span className={classes.collapsibleHeaderTitle}>{title}</span>

                <img src={arrowDown}
                     className={isCollapsed ? classes.iconSmall : [classes.iconSmall, classes.flippedVertically].join(' ')}/>
            </div>

            <div className={classes.collapsibleContent}>
                {child}
            </div>

        </div>
    );
};

export default CollapsibleTile;