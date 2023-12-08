export interface Product {
  name: string,
  image: {
    public_id: string,
    url: string
  },
  price: number,
  desc: string
}