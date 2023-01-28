import styles from './productImage.module.css'
import {
  product1,
  product1Thumbnail,
  product2,
  product2Thumbnail,
  product3,
  product3Thumbnail,
  product4,
  product4Thumbnail,
} from '../../assets'

const thumbnails = [
  { name: 'product-1', image: product1Thumbnail },
  { name: 'product-2', image: product2Thumbnail },
  { name: 'product-3', image: product3Thumbnail },
  { name: 'product-4', image: product4Thumbnail },
]

function ProductImage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.sneakersImage}
        src={product1}
        alt='sneakers'
        width={450}
        height={450}
      />
      <div className={styles.thumbnailContainer}>
        {thumbnails.map((thumbnail) => (
          <img
            key={thumbnail.name}
            className={styles.thumbnail}
            width={90}
            height={90}
            src={thumbnail.image}
            alt={thumbnail.name}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImage
