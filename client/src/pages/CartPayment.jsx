import React, { useEffect } from 'react'
import Cart from '../components/shared/Cart'
import { loadStripe } from '@stripe/stripe-js'



const CartPayment = () => {
    return (
    <div><Cart/></div>
  )
}

export default CartPayment