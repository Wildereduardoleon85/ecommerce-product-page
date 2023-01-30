import { useContext } from 'react'
import styles from './productModal.module.css'
import ProductContext from '../../../context/ProductContext'
import { Portal } from '../../Portal'
import { Carousel, CloseIcon } from '../..'

function ProductModal() {
  const { setIsModalOpen } = useContext(ProductContext)

  function onBackdropClick() {
    setIsModalOpen(false)
  }

  const closeButton = (
    <button
      onClick={() => setIsModalOpen(false)}
      className={styles.closeButton}
      type='button'
    >
      <CloseIcon className={styles.closeIcon} />
    </button>
  )

  return (
    <Portal wrapperId='modal-root'>
      <div className={styles.productModal}>
        <div
          className={styles.backdrop}
          onClick={onBackdropClick}
          aria-hidden
        />
        <Carousel closeButton={closeButton} />
      </div>
    </Portal>
  )
}

export default ProductModal
