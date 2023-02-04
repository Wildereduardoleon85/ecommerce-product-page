import { Product } from '../types'
import product1 from '../assets/image-product-1.webp'
import product1Thumbnail from '../assets/image-product-1-thumbnail.webp'
import product2 from '../assets/image-product-2.webp'
import product2Thumbnail from '../assets/image-product-2-thumbnail.webp'
import product3 from '../assets/image-product-3.webp'
import product3Thumbnail from '../assets/image-product-3-thumbnail.webp'
import product4 from '../assets/image-product-4.webp'
import product4Thumbnail from '../assets/image-product-4-thumbnail.webp'

const product: Product = {
  prize: 250,
  discount: 0.5,
  name: 'Fall Limited Editon Sneakers',
  description: `These low-profile sneakers are your perfect casual wear companion. 
    Featuring a durable rubber outer sole, they'll withstandg everything 
    the wheater can offer.`,
  images: [
    {
      name: 'image-1',
      largeImageUrl: product1,
      thumbnailImageUrl: product1Thumbnail,
    },
    {
      name: 'image-2',
      largeImageUrl: product2,
      thumbnailImageUrl: product2Thumbnail,
    },
    {
      name: 'image-3',
      largeImageUrl: product3,
      thumbnailImageUrl: product3Thumbnail,
    },
    {
      name: 'image-4',
      largeImageUrl: product4,
      thumbnailImageUrl: product4Thumbnail,
    },
  ],
}

export default product
