import { Button } from '../UI'
import styles from './productDetail.module.css'

function ProductDetail() {
  return (
    <div className={styles.container}>
      <p className={styles.companyTag}>SNEAKER COMPANY</p>
      <h1 className={styles.title}>Fall Limited Editon Sneakers</h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstandg
        everything the wheater can offer.
      </p>
      <div className={styles.prize}>
        <p>
          $125.00<span>50%</span>
        </p>
        <p>$250.00</p>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.counterButtons}>
          <button type='button'>-</button>
          <div>0</div>
          <button type='button'>+</button>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductDetail
