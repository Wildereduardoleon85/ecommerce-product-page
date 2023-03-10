import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import { product } from '../../constants'
import styles from './productImage.module.css'
import { useMediaQuery } from '../../hooks'

const { images } = product

type ProductImageProps = {
  className?: string
  onLargeImageClick?: () => void
}

type ImageProps = {
  imageIindex: number
  className?: string
}

function Image({ imageIindex, className }: ImageProps) {
  return (
    <img
      className={`${styles.largeImage} ${className || ''}`}
      width={450}
      height={450}
      src={images[imageIindex].largeImageUrl}
      alt={images[imageIindex].name}
    />
  )
}

function ProductImage({ className, onLargeImageClick }: ProductImageProps) {
  const isMobile = useMediaQuery()
  const {
    state: { productImagesActiveIndex },
    setProductImagesActiveIndex,
  } = useContext(ProductContext)

  return (
    <>
      {onLargeImageClick ? (
        <button
          className={styles.imageButton}
          type='button'
          onClick={onLargeImageClick}
        >
          <Image imageIindex={productImagesActiveIndex} className={className} />
        </button>
      ) : (
        <Image imageIindex={productImagesActiveIndex} className={className} />
      )}

      {!isMobile && (
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
                src={image.thumbnailImageUrl}
                alt={image.name}
              />
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default ProductImage
