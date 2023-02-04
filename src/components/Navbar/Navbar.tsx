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
    setIsSidebarOpen,
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

  function onMenuClick() {
    setIsSidebarOpen(true)
  }

  return (
    <header className={styles.navbarContainer}>
      <nav>
        <button
          type='button'
          className={styles.menuButton}
          onClick={onMenuClick}
        >
          <img src={menuIcon} alt='menu-icon' width={16} height={15} />
        </button>
        <img src={logo} alt='logo' />
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
          <img
            width={50}
            height={50}
            className={styles.avatar}
            src={avatarIcon}
            alt='avatar-icon'
          />
        </div>
        {showCart && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar
