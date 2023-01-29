import { useCallback, useContext } from 'react'
import { ProductImage } from '..'
import ProductContext from '../../context/ProductContext'
// import styles from './productImageContainer.module.css'

function ProductImageContainer() {
  const { setIsModalOpen } = useContext(ProductContext)

  const onLargeImageClick = useCallback(() => {
    setIsModalOpen(true)
  }, [setIsModalOpen])

  return (
    <div>
      <ProductImage onLargeImageClick={onLargeImageClick} />
    </div>
  )
}

export default ProductImageContainer
