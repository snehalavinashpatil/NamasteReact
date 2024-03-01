import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import {Link} from 'react-router-dom';

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    
    return (
        <><div className="header">
            <img className="logo" src={LOGO_URL}/>
        <div className="nav-items">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
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