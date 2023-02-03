import { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import styles from './clickAwayOverlay.module.css'

function ClickAwayOverlay() {
  const {
    state: { showCart },
    setShowCart,
  } = useContext(ProductContext)

  function onClickAway() {
    if (showCart) {
      setShowCart(false)
    }
  }

  return <div className={styles.overlay} onClick={onClickAway} aria-hidden />
}

export default ClickAwayOverlay
