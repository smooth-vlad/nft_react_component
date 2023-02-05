import React, {useEffect, useState} from 'react';
import CollapsibleTile from './collapsibleTile/CollapsibleTile';
import info from '../../Info.svg';
import AttributesList from './attributesList/AttributesList';
import Loader from '../loader/Loader';
import classes from './NFTItem.module.css'
import PriceBlock from "./priceBlock/PriceBlock";

const NFTItem = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const url = 'https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json';
    const herokuPrefix = 'https://cors-anywhere.herokuapp.com/';

    async function fetchData() {
        setIsLoading(true);
        const response = await fetch(herokuPrefix + url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!data) {
            fetchData();
        }
    });

    function getBuyPrice() {
        return Number(data?.attributes?.find(element => element.trait_type === 'Buy Price').value).toFixed(1);
    }

    function getReturnPrice() {
        return Number(data?.attributes?.find(element => element.trait_type === 'Return Price').value).toFixed(1);
    }

    function getEmptyDescriptionMessage() {
        return <div>Описание отсутствует</div>
    }

    function getEmptyAttributesMessage() {
        return <div>Аттрибуты отсутствуют</div>
    }

    return (
        isLoading
            ? <Loader/>
            : <div className={classes.nftItem}>
                <div>
                    <div className={classes.leftBlock}>
                        <img className={classes.halfBlockImage} src={data?.image}/>
                    </div>
                    <div className={classes.rightBlock}>

                        <h1>{data?.name}</h1>

                        <PriceBlock buyPrice={getBuyPrice()} returnPrice={getReturnPrice()}/>

                        <CollapsibleTile style={{marginTop: 12}} icon={info} title={'Attributes'}
                                         child={<AttributesList
                                             attributes={data?.attributes ? data.attributes : getEmptyAttributesMessage()}/>}/>

                        <CollapsibleTile style={{marginTop: 12}} icon={info} title={'Description'}
                                         child={data?.description ? data.description : getEmptyDescriptionMessage()}/>
                    </div>
                </div>
            </div>
    );
};

export default NFTItem;