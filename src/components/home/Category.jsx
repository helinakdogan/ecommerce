import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

// It will get categories by api and store.js is needed with redux

const Category = () => {

  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])


  return (
    <div className='w-1/6 bg-gray-100 p-4'>
      <div className='border-b pb-1 px-2 text-xl font-bold'>CATEGORY</div>
      {
        categories?.map((category, i) => (
          <div className='text-lg m1-1 cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category