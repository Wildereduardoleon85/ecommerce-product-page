import { MouseEvent, useState } from 'react'
import { Image } from '../../types'
import { images } from '../constants'
import styles from './productImage.module.css'

function ProductImage() {
  const [selectedImage, setSelectedImage] = useState<Image>(images[0])

  function onThumbnailClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLImageElement

    setSelectedImage(images.find((image) => image.name === target.id) as Image)
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.sneakersImage}
        src={selectedImage.largeImageUrl}
        alt={selectedImage.name}
        width={450}
        height={450}
      />
      <div className={styles.thumbnailContainer}>
        {images.map(({ name, thumbnailImageUrl }) => (
          <button
            className={`${styles.thumbnailButton} ${
              name === selectedImage.name ? styles.active : ''
            }`}
            key={name}
            type='button'
            onClick={onThumbnailClick}
          >
            <img
              id={name}
              className={`${styles.thumbnail} ${
                name === selectedImage.name ? `${styles.active}` : ''
              }`}
              width={90}
              height={90}
              src={thumbnailImageUrl}
              alt={name}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
