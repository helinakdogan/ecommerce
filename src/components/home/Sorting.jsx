import React from 'react'

// 1. select menu for sorting products

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select name='bg-gray-30 p-3 px-5' id=''>
            <option disabled value="">Select an option</option>
            <option value="inc">Increasing</option>
            <option value="dec">Decreasing</option>
        </select>
    </div>
  )
}

export default Sorting