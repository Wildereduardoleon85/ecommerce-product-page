import { Layout } from './components'
import ProductProvider from './context/ProductProvider'

function App() {
  return (
    <ProductProvider>
      <Layout />
    </ProductProvider>
  )
}

export default App
