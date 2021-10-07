import React,{useReducer} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CartContext from '../../context/CartContext'
import CartReducer from '../../reducers/Cart'

export default function Layout({ children }) {
  const [state, dispatch] = useReducer(CartReducer,{
   carts: [] 
  })
  return (
    <CartContext.Provider
    value={{
      carts: state.carts,
      dispatchCart: dispatch,
    }}
    >
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </CartContext.Provider>
  )
}
