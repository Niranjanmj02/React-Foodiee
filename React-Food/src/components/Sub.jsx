// import { useContext, useState } from 'react';
// import Modal from './UI/Modal';
// import CartContext from '../store/CartContext';
// import { currencyFormatter } from '../util/formatting';
// import Button from './UI/Button';
// import UserProgressContext from '../store/UserProgressContext';
// import CartItem from './CartItem';

// export default function Subscriptions() {
//     const cartCtx = useContext(CartContext);
//     const userProgressCtx = useContext(UserProgressContext);
//     const [subscriptionType, setSubscriptionType] = useState(''); // State for subscription type

//     const subscriptionOptions = {
//         weekly: 7,
//         monthly: 30,
//         quarterly: 120
//     };

//     const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

//     // ... your existing handleCloseCart function

//     function handleSubscriptionCalculation() {
//         let adjustedTotal = cartTotal;

//         if (subscriptionType) {
//             adjustedTotal *= subscriptionOptions[subscriptionType];
//         }

//         // ... logic to proceed with checkout using adjustedTotal 
//         userProgressCtx.showCheckout();
//     }

//     return (
//         <Modal calssName="cart"
//             open={userProgressCtx.progress === 'cart'}
//             onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
//             <h2>Your Cart</h2>
//             <ul> 

               

//                 {cartCtx.items.map((item) => (
//                     <CartItem
//                         key={item.id}
//                         name={item.name}
//                         price={item.price}
//                         quantity={item.quantity}
//                         onIncrease={() => cartCtx.addItem(item)}
//                         onDecrease={() => cartCtx.removeItem(item.id)}
//                     /> ))}
//             </ul>
//             <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
//             {/* Subscription Selection */}
//             <select onChange={(e) => setSubscriptionType(e.target.value)}>
//                 <option value="">Select Subscription</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="monthly">Monthly</option>
//                 <option value="quarterly">Quarterly</option>
//             </select>
//             <Button onClick={handleSubscriptionCalculation}>Calculate Price</Button>

//             {/* ... rest of your modal content */}
//         </Modal>

//     );
// }
