import { createContext,useState } from 'react';

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});
export function UserProgressProvider ({children}){
   const [userProgress, setUserprogress] = useState('');

   function showCart(){
    setUserprogress('cart');
   }

   function hideCart(){
    setUserprogress('');
   }

   function showCheckout(){
    setUserprogress( 'checkout' );
   }

   function hideCheckout(){
    setUserprogress('');
   }
   function showSubscriptionChart() {
    setUserProgress('subscription');
}

function hideSubscriptionChart() {
   setUserProgress('');
}

   const userProgressCtx ={
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
   };

    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )
}
export default UserProgressContext;