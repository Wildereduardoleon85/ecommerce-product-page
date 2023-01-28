import { Navbar, ProductDetail, ProductImage, ProductModal } from './components'
import ProductProvider from './context/ProductProvider'

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <main>
        <ProductImage />
        <ProductDetail />
      </main>
      <ProductModal />
    </ProductProvider>
  )
}

export default App
