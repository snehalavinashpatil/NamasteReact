import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    
    return (
        <><div className="header">
            <img className="logo" src={LOGO_URL}/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li>
                <button className='login-btn' onClick={()=>{let btnName = 'LogOut';setBtnName(btnName);}}>{btnName}</button>
                </li>
            </ul>
            </div>
            </div></>
    )
}

export default Header;