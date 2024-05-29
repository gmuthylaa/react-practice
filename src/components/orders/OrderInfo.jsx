import React, { useContext } from "react";
import { CustomerContext } from "../CustomerContextProvider";
import { SelectedItemsContext } from "../items/SelectedItemsContextProvider";

import './OrderInfo.css';

const OrderInfo = () => {

    return (
        <>
            <CustomerInfo />
            <OrderGrid />
        </>
    );
}

const CustomerInfo = () => {
    const {
        name,
        mobileNumber,
    } = useContext(CustomerContext);

    return (
        <div className="customer-info">
            <div className="customer-info-row">{`Customer Order Id: ${ Math.floor((Math.random() * 100) + 1)}`}</div>
            <div className="customer-info-row">Customer Name: {name}</div>
            <div className="customer-info-row">Customer Mobile No. {mobileNumber}</div>
        </div>
    );
}

const OrderGrid = () => {
    const {allItems, selectedItems} = useContext(SelectedItemsContext);
    
    return (
        <table className="orderInfoGrid">
            <ItemOrderInfoHeader/>
            {
                allItems && allItems.filter(item => selectedItems[item.id] && selectedItems[item.id] > 0)
                .map(item => {
                     return <ItemOrderInfo key={item.id} item={item} selectedItems={selectedItems}/>
                })
            }
            {Object.values(selectedItems).some(value => value>0) && <TotalOrderInfo items={allItems} selectedItems={selectedItems}/>}
        </table>
    );
}

const ItemOrderInfoHeader = () => {
    return (
        <tr className="orderInfoRow">
            <td>Name</td>
            <td>Quantity</td>
            <td>Cost * quantity</td>
            <td>Total cost of Item</td>
        </tr>
    );
}

const ItemOrderInfo = ({item, selectedItems}) => {
    return (
        <tr className="orderInfoRow">
            <td>{item.name}</td>
            <td>{selectedItems[item.id]}</td>
            <td>{`${item.cost} * ${selectedItems[item.id]}`}</td>
            <td>{selectedItems[item.id] * item.cost}</td>
        </tr>
    );
}

const TotalOrderInfo= ({items, selectedItems}) => {
    return(
        <tr className="orderInfoRow total-order">
            <td>Total Order Cost</td>
            <td></td>
            <td></td>
            <td>
                {
                    items.reduce((oldSum, item) => {
                        if (selectedItems[item.id]) {
                            return oldSum + (item.cost* selectedItems[item.id] );
                        } else {
                            return oldSum;
                        }
                    }, 0)
                }
            </td>
        </tr>
    );
}

export default OrderInfo;
