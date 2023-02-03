import { useContext } from 'react'
import {
  MenuSidebar,
  Navbar,
  ProductDetail,
  ProductImageContainer,
  ProductModal,
} from '..'
import ProductContext from '../../context/ProductContext'
import { useMediaQuery } from '../../hooks'

function Layout() {
  const {
    state: { isModalOpen },
  } = useContext(ProductContext)
  const isMobile = useMediaQuery()

  return (
    <>
      <Navbar />
      <main>
        <ProductImageContainer />
        <ProductDetail />
      </main>
      {isModalOpen && <ProductModal />}
      {isMobile && <MenuSidebar />}
    </>
  )
}

export default Layout
