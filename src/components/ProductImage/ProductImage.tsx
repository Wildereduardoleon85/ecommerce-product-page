import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import { images } from '../constants'
import styles from './productImage.module.css'

type ProductImageProps = {
  className?: string
  onLargeImageClick?: () => void
}

function ProductImage({ className, onLargeImageClick }: ProductImageProps) {
  const {
    state: { productImagesActiveIndex },
    setProductImagesActiveIndex,
  } = useContext(ProductContext)

  const imageElement = (
    <img
      className={`${styles.largeImage} ${className || ''}`}
      src={images[productImagesActiveIndex].largeImageUrl}
      alt='product-1'
    />
  )

  return (
    <>
      {onLargeImageClick ? (
        <button
          className={styles.imageButton}
          type='button'
          onClick={onLargeImageClick}
        >
          {imageElement}
        </button>
      ) : (
        imageElement
      )}

      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <button
            onClick={() => setProductImagesActiveIndex(index)}
            key={image.name}
            className={`${styles.thumbnailButton} ${
              index === productImagesActiveIndex ? styles.active : ''
            }`}
            type='button'
          >
            <div
              id={image.name}
              className={`${styles.overlay} ${
                index === productImagesActiveIndex ? styles.active : ''
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
    </>
  )
}

export default ProductImage
