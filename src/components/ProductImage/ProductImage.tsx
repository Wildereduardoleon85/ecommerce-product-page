import { MouseEvent, useState } from 'react'
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
import { Product } from '../../types'

const products: Product[] = [
  {
    name: 'product-1',
    image: product1,
    thumbnailImage: product1Thumbnail,
  },
  {
    name: 'product-2',
    image: product2,
    thumbnailImage: product2Thumbnail,
  },
  {
    name: 'product-3',
    image: product3,
    thumbnailImage: product3Thumbnail,
  },
  {
    name: 'product-4',
    image: product4,
    thumbnailImage: product4Thumbnail,
  },
]

function ProductImage() {
  const [selectedProduct, setselectedProduct] = useState<Product>(products[0])

  function onThumbnailClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLImageElement

    setselectedProduct(
      products.find((product) => product.name === target.id) as Product
    )
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.sneakersImage}
        src={selectedProduct.image}
        alt='sneakers'
        width={450}
        height={450}
      />
      <div className={styles.thumbnailContainer}>
        {products.map(({ name, thumbnailImage }) => (
          <button
            className={`${styles.thumbnailButton} ${
              name === selectedProduct.name ? styles.active : ''
            }`}
            key={name}
            type='button'
            onClick={onThumbnailClick}
          >
            <img
              id={name}
              className={`${styles.thumbnail} ${
                name === selectedProduct.name ? styles.active : ''
              }`}
              width={90}
              height={90}
              src={thumbnailImage}
              alt={name}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
