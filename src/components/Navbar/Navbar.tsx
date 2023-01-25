import styles from './navbar.module.css'
import logo from '../../assets/logo.svg'
import avatarIcon from '../../assets/image-avatar.png'
import { CartIcon } from '../Icons'

function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <nav>
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
          <CartIcon />
          <img src={avatarIcon} alt='avatar-icon' width={50} height={50} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
