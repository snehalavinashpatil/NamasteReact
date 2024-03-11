import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {
 const cartItems = useSelector((store)=> store.cart.items);
 //console.log(cartItems,'cartItems');

 const dispatch = useDispatch();
 const handleClearCart = ()=> {
    dispatch(clearCart());
 }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold pb-10">Cart</h1>
            <button className="bg-black text-white rounded-lg p-2" onClick={ handleClearCart}>Clear cart</button>
            <div className="flex justify-center align-middle">
                <ItemList items={cartItems}></ItemList> 
            </div>
            {cartItems.length === 0 && <h1>Cart looks empty</h1>}
        </div>
    )
}

export default Cart;