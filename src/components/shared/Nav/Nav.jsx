import React from 'react'
import styles from './style/nav.module.css'
import { LuShoppingCart } from 'react-icons/lu'
import { BiHeart, BiUser } from 'react-icons/bi'
import {RiSearchLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import CartSidebar from '../cart/CartSidebar'
import logo from '../../../assests/Vector.svg'
const Nav = () => {
    const [isActive, setActive] = useState(false)
    const [profile, setProfile] = useState(false)
    const [search,setSearch]= useState(false)
    const showCart = () => { 
        setActive(!isActive);
    }
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.icons}>
                    <ul>
                        <li onClick={showCart}><LuShoppingCart className={styles.icon} /> </li>
                        <li> <BiHeart className={styles.icon} /></li>
                        <li> <BiUser className={styles.icon} /></li>
                        <li> <RiSearchLine className={styles.icon} /></li>
                    </ul>
                </div>
                
                {//cart not complete styling 
                    isActive && <CartSidebar isActive={isActive} setActive={setActive} />
                }

                <ul className={styles.menu}>
                    <li>
                        <Link to="/contact" style={{"color":"#000000b3"}}>اتصل بنا</Link>
                    </li>
                    <li>
                        <Link to="/blog" style={{"color":"#000000b3"}}>المدونة</Link>
                    </li>
                    <li>
                        <Link to="/" style={{"color":"#000000b3"}}>الشروط  والاحكام</Link>
                    </li>
                    <li>
                        <Link to="/" style={{"color":"#000000b3"}}>نبذه عنا </Link>
                    </li>
                    <li>
                        <Link to="/" style={{"color":"#000000b3"}}>الخدمات</Link>
                    </li>
                    <li>
                        <Link to="/products" style={{"color":"#000000b3"}}>المنتجات</Link>
                    </li>
                    <li>
                        <Link to="/" style={{"color":"#000000b3"}}>الرئيسية</Link>
                    </li>
                </ul>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
            </nav>
        </>
    )
}

export default Nav