import { createContext, useState } from "react";

export const CustomerContext = createContext({name: '', mobileNumber: ''});

const CustomerContextProvider = (props) => {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    return(
        <CustomerContext.Provider 
            value= {
                {
                    name,
                    setName,
                    mobileNumber,
                    setMobileNumber
                }
            }
        >
            {
                props.children
            }
        </CustomerContext.Provider>
    )
}
export default CustomerContextProvider;