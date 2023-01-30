import { useContext } from 'react'
import { product } from '../../constants'
import ProductContext from '../../context/ProductContext'
import { NextIcon, PrevIcon, ProductImage } from '..'
import styles from './carousel.module.css'

const { images } = product

type CarouselProps = {
  className?: string
  closeButton?: JSX.Element
}

function Carousel({ className, closeButton }: CarouselProps) {
  const {
    state: { productImagesActiveIndex },
    setProductImagesActiveIndex,
  } = useContext(ProductContext)

  function onNextImageClick() {
    if (productImagesActiveIndex === images.length - 1) return
    setProductImagesActiveIndex(productImagesActiveIndex + 1)
  }

  function onPrevImageClick() {
    if (productImagesActiveIndex === 0) return
    setProductImagesActiveIndex(productImagesActiveIndex - 1)
  }

  return (
    <div className={`${styles.carousel} ${className || ''}`}>
      {closeButton || null}
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
  )
}

export default Carousel
