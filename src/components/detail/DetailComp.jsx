import React from 'react'

const DetailComp = ({productDetail}) => {
  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[700px] h-[700px] object-cover' src={productDetail?.image} alt="" />
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-2'>{productDetail?.description}</div>
            <div>Rating : {productDetail?.rating?.rate}</div>
            <div>Count: {productDetail?.rating?.count}</div>
            <div className='text-3xl font-bold'>{productDetail?.price}</div>
        </div>
    </div>
  )
}

export default DetailComp