import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
query getAllProducts {
    category {
        name
          products{
            id
            name
            category
            gallery
            inStock
            prices{amount}
        }
      }
  }
`

export const GET_PRODUCTS = gql`
query GET_PRODUCTS($id: CategoryInput) {
    category(input: $id) {
        name
          products {
            id
            name
            category
            gallery
            inStock
            description
            prices{amount}
            attributes {
              name
              type
              items {
                value
                id
                displayValue
              }
              id
            }
        }
      }
  }
`

export const GET_CLOTHES_PRODUCT = gql`
query GET_CLOTHES_PRODUCT {
  category(input: {title: "clothes"}) {
    name
    products {
      id
      category
      name
      gallery
      prices{amount}
    }
  }
}
`

export const GET_TECH_PRODUCT = gql`
query GET_CLOTHES_PRODUCT {
  category(input: {title: "tech"}) {
    name
    products {
      id
      category
      name
      gallery
      prices{amount}
      attributes {
        name
        type
        items {
          value
          id
          displayValue
        }
        id
      }
    }
  }
}
`