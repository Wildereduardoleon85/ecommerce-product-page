import { useContext } from 'react'
import styles from './productModal.module.css'
import { images } from '../constants'
import { CloseIcon, NextIcon, PrevIcon } from '../Icons'
import { ProductImage } from '../ProductImage'
import ProductContext from '../../context/ProductContext'

function ProductModal() {
  const {
    state: { productImagesActiveIndex },
    setProductImagesActiveIndex,
    setIsModalOpen,
  } = useContext(ProductContext)

  function onNextImageClick() {
    if (productImagesActiveIndex === images.length - 1) return
    setProductImagesActiveIndex(productImagesActiveIndex + 1)
  }

  function onPrevImageClick() {
    if (productImagesActiveIndex === 0) return
    setProductImagesActiveIndex(productImagesActiveIndex - 1)
  }

  function onBackdropClick() {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.root}>
      <div className={styles.backdrop} onClick={onBackdropClick} aria-hidden />
      <div className={styles.modalContainer}>
        <button
          onClick={() => setIsModalOpen(false)}
          className={styles.closeButton}
          type='button'
        >
          <CloseIcon className={styles.closeIcon} />
        </button>
        <button
          onClick={onNextImageClick}
          type='button'
          className={`${styles.IconButton} ${styles.next}`}
        >
          <NextIcon className={styles.chevronIcon} />
        </button>
        <button
          onClick={onPrevImageClick}
          type='button'
          className={`${styles.IconButton} ${styles.prev}`}
        >
          <PrevIcon className={styles.chevronIcon} />
        </button>
        <div>
          <ProductImage className={styles.productImage} />
        </div>
      </div>
    </div>
  )
}

export default ProductModal
