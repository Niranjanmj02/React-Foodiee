import { createContext,useState } from 'react';

const UserProgressContexts = createContext({
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

   const userProgressCtxs={
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
   };

    return(
        <UserProgressContexts.Provider value={userProgressCtxs}>{children}</UserProgressContexts.Provider>
    )
}
export default UserProgressContexts;