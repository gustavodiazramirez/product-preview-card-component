import React from 'react'
import IconCart from "../components/icons/icon-cart";

export const CartButton = () => {
  return (
    <div className="flex justify-center">
    <button className="bg-emerald-700 text-white px-24 sm:px-14 py-3 sm:py-2 rounded-md flex items-center mb-6 sm:mb-4">
      <div className="mr-2">
        <IconCart />
      </div>
      Add to Cart
    </button>
  </div>
  )
}
export default CartButton