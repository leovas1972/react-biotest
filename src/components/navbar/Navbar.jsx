import "./style.css";
import logo from "./../../img/logo.png";
import BurgerIcon from "../burger/BurgerIcon";
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import {SelectProducts} from "../select_products/SelectProducts";



const Navbar = () => {
    const { t } = useTranslation();
    
    return (
        
            <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <a href='!#' className='logo bg-logo'>
                        <img src={logo} alt='' />
                    </a>

                    {/* <!-- Навигация --> */}
                    <div className="navigation">
                        <NavLink className="left" to="/">{t('navbar.navigation.company')}</NavLink>
                        <NavLink className="left" to="production">{t('navbar.navigation.production')}</NavLink>
                        <NavLink to="products"><SelectProducts /></NavLink>
                        <NavLink className="left" to="contacts">{t('navbar.navigation.contacts')}</NavLink>
                    </div>

                    <BurgerIcon />
                </div>
            </div>
        </nav>
       
    );
};

export default Navbar;
