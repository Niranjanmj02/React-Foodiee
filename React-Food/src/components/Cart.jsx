import React, { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext'; 
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';


export default function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.cartTotal;
    
    function handleCloseCart(){
       userProgressCtx.hideCart();
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }

    function handleSubscribe(itemId, subscriptionType) {
        // Here you can handle the subscription logic, such as storing it in your state or making API calls
        console.log(`Subscribing item ${itemId} with ${subscriptionType} subscription.`);
    }

    return (
        <Modal className="cart" 
            open={userProgressCtx.progress === 'cart'} 
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) =>(
                    <CartItem 
                        key={item.id} 
                        name={item.name} 
                        price={item.price}
                        quantity={item.quantity} 
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                        onSubscribe={handleSubscribe}
                    />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                
                <Button textOnly onClick={handleCloseCart}>close</Button>
                {cartCtx.items.length > 0 && (<Button onClick={handleGoToCheckout}>Go to Check out</Button>) }
            </p>
        </Modal>
    );
}
