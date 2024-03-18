import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext  from '../store/UserProgressContext';
import UserProgressContexts from '../store/SubscriptionContext';

debugger
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const userProgressCtxs = useContext(UserProgressContexts)


    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
     return totalNumberOfItems + item.quantity;
 }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();
    } 
    function handleSubs(){
        userProgressCtxs.showCart();

    }


    return <header id="main-header"> 
    <div id="title">
        <img src={logoImg} alt="A restaurant"/>
        <h1>FooDilie</h1>
    </div>
    <nav>
        <Button textOnly onClick={handleShowCart}>Cart/Subscribe ({totalCartItems})</Button>
        
    </nav>
    </header>
}


//<Button textOnly onClick={handleShowCart}>Subscription </Button>