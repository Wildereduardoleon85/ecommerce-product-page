import { useContext } from 'react'
import { Navbar, ProductDetail, ProductImageContainer, ProductModal } from '..'
import ProductContext from '../../context/ProductContext'

function Layout() {
  const {
    state: { isModalOpen },
  } = useContext(ProductContext)

  return (
    <>
      <Navbar />
      <main>
        <ProductImageContainer />
        <ProductDetail />
      </main>
      {isModalOpen && <ProductModal />}
    </>
  )
}

export default Layout
