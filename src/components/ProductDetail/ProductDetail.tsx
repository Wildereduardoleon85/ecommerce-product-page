import { useCallback, useContext, useState } from 'react'
import { product } from '../../constants'
import ProductContext from '../../context/ProductContext'
import { CartIcon } from '../Icons'
import { Button } from '../UI'
import styles from './productDetail.module.css'

const { name, description, prize, discount } = product

function ProductDetail() {
  const {
    state: { cartItems },
    setCartItems,
  } = useContext(ProductContext)
  const [itemsToAdd, setItemsToAdd] = useState<number>(cartItems)

  function onItemsToAdd() {
    setItemsToAdd(itemsToAdd + 1)
  }

  function onItemsToRemove() {
    if (itemsToAdd === 0) return
    setItemsToAdd(itemsToAdd - 1)
  }

  const onAddItemsToTheCart = useCallback(() => {
    setCartItems(itemsToAdd)
  }, [itemsToAdd])

  return (
    <div className={styles.container}>
      <p className={styles.companyTag}>SNEAKER COMPANY</p>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.prize}>
        <p>
          {`$${(prize * discount).toFixed(2)}`}
          <span>{`${discount * 100}%`}</span>
        </p>
        <p>{`$${prize.toFixed(2)}`}</p>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.counterButtons}>
          <button type='button' onClick={onItemsToRemove}>
            -
          </button>
          <div>{String(itemsToAdd)}</div>
          <button type='button' onClick={onItemsToAdd}>
            +
          </button>
        </div>
        <Button className={styles.cartButton} onClick={onAddItemsToTheCart}>
          <span>
            <CartIcon className={styles.cartIcon} />
          </span>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail
