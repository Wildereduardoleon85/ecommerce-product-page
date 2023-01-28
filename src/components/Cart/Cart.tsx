import { Dispatch, SetStateAction } from 'react'
import styles from './cart.module.css'
import thumbnail from '../../assets/image-product-1-thumbnail.jpg'
import { DeleteIcon } from '../Icons'

type CartProps = {
  setShowCart: Dispatch<SetStateAction<boolean>>
}

function Cart({ setShowCart }: CartProps) {
  function onCartMouseOver() {
    setShowCart(true)
  }

  function onCartMouseLeave() {
    setShowCart(false)
  }

  return (
    <div
      onMouseOver={onCartMouseOver}
      onFocus={onCartMouseOver}
      onMouseLeave={onCartMouseLeave}
      className={styles.overlay}
    >
      <div className={styles.cartCard}>
        <div>
          <p>Cart</p>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.itemContainer}>
            <img
              className={styles.thumbnail}
              src={thumbnail}
              alt='thumbnail'
              width={50}
              height={50}
            />
            <p className={styles.description}>
              Fall Limited Edition Sneakers $125.00 x 3{' '}
              <span className={styles.total}>$375.00</span>
            </p>
            <div>
              <DeleteIcon className={styles.deleteIcon} />
            </div>
          </div>
          <button className={`button ${styles.checkoutButton}`} type='button'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
