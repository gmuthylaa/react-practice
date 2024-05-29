import React, { useContext } from "react";
import { CustomerContext } from "./CustomerContextProvider";

import './CustomerForm.css'

const CustomerForm = () => {

    const {
        setName,
        setMobileNumber
    } = useContext(CustomerContext)

    const setCuromerName = (e) => {
        const name = e.target.value;
        setName(name);
    }

    const setMobNumber = (e) => {
        const mobileNumber = e.target.value;
        setMobileNumber(mobileNumber);
    }

    return (
        <div className="customer-form-wrapper">
                    
            <div className="customer-input-wrapper">
                <input
                    type="text"
                    name="name"
                    onChange={setCuromerName}
                    className="customer-input"
                    placeholder="Customer Name"
                />
            </div>
            <div className="customer-input-wrapper">
                <input
                    className="customer-input"
                    type="number" 
                    name="mobNumber"
                    onChange={setMobNumber}
                    max={10}
                    placeholder="Customer Mobile no."
                />
            </div>
        </div>
    )
}
export default CustomerForm;