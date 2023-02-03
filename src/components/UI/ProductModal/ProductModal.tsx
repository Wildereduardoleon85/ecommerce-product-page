import { useContext, useEffect } from 'react'
import styles from './productModal.module.css'
import ProductContext from '../../../context/ProductContext'
import { Portal } from '../../Portal'
import { Carousel, CloseIcon } from '../..'

function ProductModal() {
  const {
    state: { isModalOpen },
    setIsModalOpen,
  } = useContext(ProductContext)

  function escapeKeyHandler(e: globalThis.KeyboardEvent): void {
    if (e.key === 'Escape' && isModalOpen) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escapeKeyHandler)

    return () => {
      window.removeEventListener('keydown', escapeKeyHandler)
    }
  }, [])

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
