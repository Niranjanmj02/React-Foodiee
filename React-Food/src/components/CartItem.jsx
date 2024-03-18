import React, { useState, useEffect } from 'react';
import { currencyFormatter } from '../util/formatting';
import CartContext from '../store/CartContext'; 
import { useContext } from 'react';


export default function CartItem({ name, quantity, price, onIncrease, onDecrease, id }) {
    const [frequency, setFrequency] = useState('weekly');
    const [cartTotal, setCartTotal] = useState(quantity * price);
    const cartCtx = useContext(CartContext); 
    useEffect(() => {
        updateTotal(frequency);
    }, [quantity, price, frequency]);

    const updateTotal = (freq) => {
        let multiplier = 1;
        if (freq === 'monthly') multiplier = 30;
        else if (freq === 'quarterly') multiplier = 120;
        else if (freq === 'weekly') multiplier = 7;
        setCartTotal(quantity * price * multiplier);
    };

    const handleFrequencyChange = (freq) => {
        setFrequency(freq);
        updateTotal(freq);
    
        // Update CartContext when the frequency changes
        cartCtx.onFrequencyChange(item.id, freq);
    };

    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {currencyFormatter.format(price)}
                <div className="radio-group">
                    <input
                        type="radio"
                        id={`None-${name}`}
                        name={`frequency-${name}`}
                        value="None"
                        checked={frequency === 'None'}
                        onChange={() => handleFrequencyChange('None')}
                    />
                    <label htmlFor={`none-${name}`}>None</label>
                    <input
                        type="radio"
                        id={`weekly-${name}`}
                        name={`frequency-${name}`}
                        value="weekly"
                        checked={frequency === 'weekly'}
                        onChange={() => handleFrequencyChange('weekly')}
                    />
                    <label htmlFor={`weekly-${name}`}>Weekly</label>

                    <input
                        type="radio"
                        id={`monthly-${name}`}
                        name={`frequency-${name}`}
                        value="monthly"
                        checked={frequency === 'monthly'}
                        onChange={() => handleFrequencyChange('monthly')}
                    />
                    <label htmlFor={`monthly-${name}`}>Monthly</label>
                    <input
                        type="radio"
                        id={`quarterly-${name}`}
                        name={`frequency-${name}`}
                        value="quarterly"
                        checked={frequency === 'quarterly'}
                        onChange={() => handleFrequencyChange('quarterly')}
                    />
                    <label htmlFor={`quarterly-${name}`}>Quarterly</label>
                </div>
            </p>
            <p>
                Total: {currencyFormatter.format(cartTotal)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    );
}
