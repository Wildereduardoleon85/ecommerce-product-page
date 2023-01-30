import { Dispatch, SetStateAction } from 'react'
import styles from './cart.module.css'
import thumbnail from '../../assets/image-product-1-thumbnail.jpg'
import { Button, DeleteIcon } from '..'

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
      className={styles.cartCard}
      onMouseEnter={onCartMouseOver}
      onMouseLeave={onCartMouseLeave}
    >
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
        <Button className={styles.checkoutButton}>Checkout</Button>
      </div>
    </div>
  )
}

export default Cart
