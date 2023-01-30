import { Product } from '../types'
import {
  product1,
  product2,
  product3,
  product4,
  product1Thumbnail,
  product2Thumbnail,
  product3Thumbnail,
  product4Thumbnail,
} from '../assets'

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
