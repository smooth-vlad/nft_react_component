import React from 'react';
import AttributeItem from './AttributeItem';

const AttributesList = ({style, attributes}) => {

    function getDivider(index, key) {
        if (index < attributes.length - 1) {
            return <div key={key} style={{height: 12}}/>
        }
    }

    return (
        <div style={style}>
            {attributes.map((element, index) => {
                return [
                    <AttributeItem key={element.trait_type} title={element.trait_type} value={element.value}/>,
                    getDivider(index, element.trait_type + 'spacer')
                ]
            })}
        </div>
    );
};

export default AttributesList;