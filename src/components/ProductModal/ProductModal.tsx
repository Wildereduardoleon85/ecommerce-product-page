import { useState } from 'react'
import styles from './productModal.module.css'
import { images } from '../constants'
import { CloseIcon, NextIcon, PrevIcon } from '../Icons'

function ProductModal() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  function onNextImageClick() {
    if (activeIndex === images.length - 1) return
    setActiveIndex(activeIndex + 1)
  }

  function onPrevImageClick() {
    if (activeIndex === 0) return
    setActiveIndex(activeIndex - 1)
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} type='button'>
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
        <img
          className={styles.largeImage}
          src={images[activeIndex].largeImageUrl}
          alt='product-1'
          width={600}
          height={600}
        />
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <button
              onClick={() => setActiveIndex(index)}
              key={image.name}
              className={`${styles.thumbnailButton} ${
                index === activeIndex ? styles.active : ''
              }`}
              type='button'
            >
              <div
                id={image.name}
                className={`${styles.overlay} ${
                  index === activeIndex ? styles.active : ''
                }`}
              />
              <img
                className={styles.thumbnail}
                width={90}
                height={90}
                src={image.thumbnailImageUrl}
                alt={image.name}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductModal
