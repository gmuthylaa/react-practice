import { createContext, useCallback, useState } from "react";

import Items from "./Items.json";

export const SelectedItemsContext = createContext({});

const SelectedItemsContextProvider = (props) => {
    
    const [items, setItems] = useState(Items || []);
    const [allItems] = useState([...Items] || []);
    const [selectedItems, setSelectedItems] = useState({});

    const filterItems = useCallback((itemName) => {
        if(itemName) {
            const filterItems = allItems.filter(item => 
                item.name.toLocaleLowerCase().includes(itemName.toLocaleLowerCase()))
            setItems(filterItems);
        } else {
            setItems(allItems);
        }
    },[allItems]);

    return (
        <SelectedItemsContext.Provider 
            value={
                {
                    allItems,
                    items,
                    setItems,
                    filterItems,
                    selectedItems,
                    setSelectedItems
                }
            }
        >
            {props.children}
        </SelectedItemsContext.Provider>
    );
    
}

export default SelectedItemsContextProvider;