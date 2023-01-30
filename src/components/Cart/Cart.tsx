import { Dispatch, SetStateAction, useContext } from 'react'
import styles from './cart.module.css'
import thumbnail from '../../assets/image-product-1-thumbnail.jpg'
import { Button, DeleteIcon } from '..'
import ProductContext from '../../context/ProductContext'
import { product } from '../../constants'

const { prize, discount } = product

type CartProps = {
  setShowCart: Dispatch<SetStateAction<boolean>>
}

function Cart({ setShowCart }: CartProps) {
  const {
    state: { cartItems },
    setCartItems,
  } = useContext(ProductContext)

  const isCartEmpty = cartItems === 0

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
      <div
        className={`${styles.descriptionContainer} ${
          isCartEmpty ? styles.emptyCart : ''
        }`}
      >
        {isCartEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.itemContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt='thumbnail'
                width={50}
                height={50}
              />
              <p className={styles.description}>
                Fall Limited Edition Sneakers ${(prize * discount).toFixed(2)} x{' '}
                {cartItems}{' '}
                <span className={styles.total}>
                  ${(prize * discount * cartItems).toFixed(2)}
                </span>
              </p>
              <div>
                <button
                  className={styles.iconButton}
                  type='button'
                  onClick={() => setCartItems(0)}
                >
                  <DeleteIcon className={styles.deleteIcon} />
                </button>
              </div>
            </div>
            <Button className={styles.checkoutButton}>Checkout</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
