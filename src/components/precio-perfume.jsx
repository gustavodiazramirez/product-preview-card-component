import React from 'react'

export const PrecioPerfume = () => {
  return (
    <div className="flex p-6 -mt-6">
    <div className="flex flex-col justify-between">
      <p className="text-emerald-800 font-fraunces text-3xl">$149.99</p>
    </div>

    <div className="flex flex-col  ml-4 justify-center">
      <p className="text-dark-grayish-blue text-sm line-through">
        $169.99
      </p>
    </div>
  </div>
  )
}
export default PrecioPerfume;