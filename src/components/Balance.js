import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <div className="YourBalance-container">
            <h4>Balance</h4>
            <br/>
            <h4>${total}</h4>
        </div>
    )
}
