import { useState,useContext } from 'react';
import { useSelector } from 'react-redux';
import {LOGO_URL} from '../utils/constants';
import {Link} from 'react-router-dom';
import UserContext from '../utils/UserContext';


const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const userData = useContext(UserContext);

    //Redux selector - subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems,'cartItems');
    return (
        <><div className="flex bg-pink-200 shadow-sm justify-between items-center">
            <img className="w-24" src={LOGO_URL}/>
        <div className="nav-items justify-between">
            <ul className='flex'>
                <li className='px-4'>
                <Link to="/">Home</Link>
                </li>
                <li className='px-4'>
                    <Link to='/about'>About Us</Link>
                </li>
                <li className='px-4'>
                    <Link to='/grocery'>Grocery</Link>
                </li>
                <li className='px-4'>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className='px-4 font-bold'><Link to='/cart'>Cart({cartItems.length} items)</Link></li>
                <li className='px-4'>
                <button className='login-btn' onClick={()=>{let btnName = 'LogOut';setBtnName(btnName);}}>{btnName}</button>
                </li>
                <li>Hello {userData.loggedIn}</li>
            </ul>
            </div>
            </div></>
    )
}

export default Header;