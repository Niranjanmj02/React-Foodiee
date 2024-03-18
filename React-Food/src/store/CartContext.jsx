import { createContext,useReducer } from 'react';

const CartContext = createContext({
    items: [],
    cartTotal : 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () =>{},
    updateFrequency: (itemId, newFrequency) => {}
});
console.log('add')

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
            const updatedItems = [...state.items];

            if (existingItemIndex > -1) {
                updatedItems[existingItemIndex].quantity++;
            } else {
                updatedItems.push({ ...action.item, quantity: 1, frequency: 'None' }); // Set default
            }

            const newCartTotal = updatedItems.reduce((totalPrice, item) => {
                const frequency = item.frequency || 'None'; 
                const multiplier = (frequency === 'weekly') ? 7 : (frequency === 'monthly') ? 30 : (frequency === 'quarterly') ? 120 : 1;
                return totalPrice + (item.quantity * item.price * multiplier);
            }, 0);

            return { ...state, items: updatedItems, cartTotal: newCartTotal };
        }

        case 'REMOVE_ITEM': {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
            const updatedItems = [...state.items];

            if (updatedItems[existingItemIndex].quantity === 1) {
                updatedItems.splice(existingItemIndex, 1);
            } else {
                updatedItems[existingItemIndex].quantity--;
            }

            const newCartTotal = updatedItems.reduce(/* ... same calculation logic as before */);

            return { ...state, items: updatedItems, cartTotal: newCartTotal }; 
        }

        case 'UPDATE_FREQUENCY': {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.itemId);

            if (existingItemIndex > -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].frequency = action.newFrequency;

                const newCartTotal = updatedItems.reduce(/* ... same calculation logic as before */);

                return { ...state, items: updatedItems, cartTotal: newCartTotal };
            } else {
                return state; // Item not found - you might want to handle this differently 
            }
        }

        case 'CLEAR_CART':
            return { ...state, items: [], cartTotal: 0 };

        default:
            return state;        
    }
}

export function CartContextProvider({children}){
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], cartTotal: 0 }); 

 function addItem(item){
    debugger
    dispatchCartAction({type: 'ADD_ITEM', item});
 }
 function removeItem(id){
    dispatchCartAction({type: 'REMOVE_ITEM', id});
 
}

function clearCart(){
    dispatchCartAction({ type:'CLEAR_CART'});
}
 const cartContext = {
    items: cart.items,
    cartTotal: cart.cartTotal,
    addItem,
    removeItem,
    clearCart
};

   return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
