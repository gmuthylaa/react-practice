import React, { useContext } from "react";

import Card from "../card/Card";

import './items.css';
import { SelectedItemsContext } from "./SelectedItemsContextProvider";

const ItemSelection = () => {

    const {items, filterItems} = useContext(SelectedItemsContext);

    return (
        <>
            <div>
                <input
                    className="search"
                    type="text" 
                    name="Search" 
                    placeholder="search for an item"
                    onChange={(e) => filterItems(e.target.value)}
                />
            </div>
            <div className="all-items">
                {
                    items && items.map(item => <Card item={item}/>)
                }
            </div>
        </>
    );
}
export default ItemSelection;
