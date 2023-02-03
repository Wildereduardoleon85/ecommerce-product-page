export type Image = {
  name: string
  largeImageUrl: string
  thumbnailImageUrl: string
}

export type ProductState = {
  productImagesActiveIndex: number
  isModalOpen: boolean
  cartItems: number
  showCart: boolean
}

export type Product = {
  prize: number
  discount: number
  name: string
  description: string
  images: Image[]
}
