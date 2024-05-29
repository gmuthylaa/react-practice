import React, { useContext } from "react";
import { SelectedItemsContext } from "../items/SelectedItemsContextProvider";

import './Card.css'

const Card = ({item}) => {

    const {allItems, selectedItems,setSelectedItems} = useContext(SelectedItemsContext);
    
    const setSelectedItem = (updatedItem, event) => {
        if (event && event.target) {
            const isUpdatedItemExists =allItems.some(item => updatedItem.id === item.id);
            if (isUpdatedItemExists) {
                setSelectedItems({...selectedItems, [updatedItem.id]: event.target.value});
            }
        }
    }

    return(
        <div className="item-card-wrapper">
            <div className="item-card-image">
                <img 
                    src={item.image}
                    className="card-item-image"
                />
            </div>
            <div className="item-card-input">
                <div>{item.name}</div>
                <div>
                    <input
                        className="item-quantity-input"
                        name={item.name}
                        onChange={(event) => setSelectedItem(item, event)}
                        min={1}
                        type="number"
                        placeholder="Enter Quantity"
                        value={selectedItems[item.id]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;