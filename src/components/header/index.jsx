import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import './style.css';
import {Link} from 'react-router-dom';

export const Header = () => {
    return <header className="header">
        <div className="header__content">
            <div className="logo">
                <h1 id="title"><Link to='/'>ENGMAN</Link></h1>
                <img src={logo} alt="no logo"/>
            </div>

            <div className="menu">
                <a href="https://www.google.com/">
                    <img src={search} alt="no image"/>
                </a>
                <button className="loginButton menu__button">Login</button>
                <button className="menu__button">Sign up</button>
            </div>
        </div>
    </header>
}