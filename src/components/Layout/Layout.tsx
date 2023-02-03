import { useContext } from 'react'
import {
  Navbar,
  ProductDetail,
  ProductImageContainer,
  ProductModal,
  Cart,
} from '..'
import ProductContext from '../../context/ProductContext'

function Layout() {
  const {
    state: { isModalOpen, showCart },
  } = useContext(ProductContext)

  return (
    <>
      <Navbar />
      <main>
        <ProductImageContainer />
        <ProductDetail />
      </main>
      {isModalOpen && <ProductModal />}
      {showCart && <Cart />}
    </>
  )
}

export default Layout
