export interface Review {
  customer: string
  review: string
  score: number
}

export interface Sales {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

export interface RetailItem {
  id: string
  title: string
  image: string
  subtitle: string
  brand: string
  reviews: Review[]
  retailer: string
  details: string[]
  tags: string[]
  sales: Sales[]
}
