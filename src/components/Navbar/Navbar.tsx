import { useState } from 'react'
import styles from './navbar.module.css'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/icon-menu.svg'
import avatarIcon from '../../assets/image-avatar.png'
import { Cart, CartIcon } from '..'

function Navbar() {
  const [showCart, setShowCart] = useState<boolean>(false)

  function onCartMouseOver() {
    setShowCart(true)
  }

  function onCartMouseLeave() {
    setShowCart(false)
  }

  console.log(showCart)

  return (
    <header className={styles.navbarContainer}>
      <nav>
        <img src={menuIcon} alt='menu-icon' width={16} height={15} />
        <img src={logo} alt='logo' width={138} height={20} />
        <ul>
          <li>
            <button type='button'>Collections</button>
          </li>
          <li>
            <button type='button'>Men</button>
          </li>
          <li>
            <button type='button'>Women</button>
          </li>
          <li>
            <button type='button'>About</button>
          </li>
          <li>
            <button type='button'>Contact</button>
          </li>
        </ul>
        <div>
          <div
            className={styles.cartIconContainer}
            onMouseOver={onCartMouseOver}
            onFocus={onCartMouseOver}
            onMouseLeave={onCartMouseLeave}
          >
            <CartIcon />
            <div>3</div>
          </div>
          <img src={avatarIcon} alt='avatar-icon' width={50} height={50} />
        </div>
        {true && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar
