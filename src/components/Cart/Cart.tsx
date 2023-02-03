import { useContext, useEffect } from 'react'
import styles from './cart.module.css'
import thumbnail from '../../assets/image-product-1-thumbnail.jpg'
import { Button, DeleteIcon } from '..'
import ProductContext from '../../context/ProductContext'
import { product } from '../../constants'
import { useMediaQuery } from '../../hooks'

const { prize, discount } = product

function Cart() {
  const {
    state: { cartItems, showCart },
    setCartItems,
    setShowCart,
  } = useContext(ProductContext)
  const isMobile = useMediaQuery()
  const isCartEmpty = cartItems === 0

  function escapeKeyHandler(e: globalThis.KeyboardEvent): void {
    if (e.key === 'Escape' && showCart) {
      setShowCart(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escapeKeyHandler)

    return () => {
      window.removeEventListener('keydown', escapeKeyHandler)
    }
  }, [])

  function onCartMouseOver() {
    setShowCart(true)
  }

  function onCartMouseLeave() {
    setShowCart(false)
  }

  function onClickAway() {
    setShowCart(false)
  }

  return (
    <>
      {isMobile && (
        <div
          className={styles.clickAwayOverlay}
          onClick={onClickAway}
          aria-hidden
        />
      )}

      <div
        className={styles.cartCard}
        onMouseEnter={isMobile ? () => null : onCartMouseOver}
        onMouseLeave={isMobile ? () => null : onCartMouseLeave}
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
                  Fall Limited Edition Sneakers ${(prize * discount).toFixed(2)}{' '}
                  x {cartItems}{' '}
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
    </>
  )
}

export default Cart
