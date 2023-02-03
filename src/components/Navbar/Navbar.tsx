import { useContext } from 'react'
import styles from './navbar.module.css'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/icon-menu.svg'
import avatarIcon from '../../assets/image-avatar.png'
import { CartIcon, Cart } from '..'
import ProductContext from '../../context/ProductContext'
import { useMediaQuery } from '../../hooks'

function Navbar() {
  const {
    state: { cartItems, showCart },
    setShowCart,
  } = useContext(ProductContext)
  const isMobile = useMediaQuery()

  function onCartMouseOver() {
    setShowCart(true)
  }

  function onCartMouseLeave() {
    setShowCart(false)
  }

  function onCartClick() {
    setShowCart(true)
  }

  return (
    <header className={styles.navbarContainer}>
      <nav>
        <img src={menuIcon} alt='menu-icon' width={16} height={15} />
        <img src={logo} alt='logo' width={138} height={20} />
        <ul>
          <li>
            <button className={styles.menuItem} type='button'>
              Collections
            </button>
          </li>
          <li>
            <button className={styles.menuItem} type='button'>
              Men
            </button>
          </li>
          <li>
            <button className={styles.menuItem} type='button'>
              Women
            </button>
          </li>
          <li>
            <button className={styles.menuItem} type='button'>
              About
            </button>
          </li>
          <li>
            <button className={styles.menuItem} type='button'>
              Contact
            </button>
          </li>
        </ul>
        <div className={styles.cartAvatarContainer}>
          <div
            className={styles.popper}
            onMouseEnter={isMobile ? () => null : onCartMouseOver}
            onMouseLeave={isMobile ? () => null : onCartMouseLeave}
            aria-hidden
          >
            <button
              type='button'
              className={styles.cartButton}
              onClick={onCartClick}
            >
              <CartIcon
                className={`${styles.cartIcon} ${showCart ? styles.fill : ''}`}
              />
              {cartItems > 0 && <div>{String(cartItems)}</div>}
            </button>
          </div>
          <img src={avatarIcon} alt='avatar-icon' width={50} height={50} />
        </div>
        {showCart && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar
