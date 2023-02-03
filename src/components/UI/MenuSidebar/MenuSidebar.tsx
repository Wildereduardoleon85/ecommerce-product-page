import { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import { CloseIcon } from '../../Icons'
import styles from './menuSidebar.module.css'

function MenuSidebar() {
  const {
    state: { isSidebarOpen },
    setIsSidebarOpen,
  } = useContext(ProductContext)

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden
          className={styles.overlay}
        />
      )}
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}
      >
        <button type='button' onClick={() => setIsSidebarOpen(false)}>
          <CloseIcon className={styles.closeIcon} />
        </button>
        <ul className={styles.list}>
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
      </div>
    </>
  )
}

export default MenuSidebar
