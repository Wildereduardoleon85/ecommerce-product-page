import { useCallback, useContext } from 'react'
import { Carousel, ProductImage } from '..'
import ProductContext from '../../context/ProductContext'
import { useMediaQuery } from '../../hooks'
import styles from './productImageContainer.module.css'

function ProductImageContainer() {
  const { setIsModalOpen } = useContext(ProductContext)
  const isMobile = useMediaQuery()

  const onLargeImageClick = useCallback(() => {
    setIsModalOpen(true)
  }, [setIsModalOpen])

  return (
    <div>
      {isMobile ? (
        <Carousel className={styles.carousel} />
      ) : (
        <ProductImage onLargeImageClick={onLargeImageClick} />
      )}
    </div>
  )
}

export default ProductImageContainer
