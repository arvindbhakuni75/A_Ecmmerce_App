import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosCloseCircleOutline } from "react-icons/io";

const SearchResult = () => {

  const showResults = useSelector((state) => state.addToCardSlice.showSearchResults)
  console.log(showResults)
  return (
    <div className={`w-full h-full fixed flex justify-center bg-gray-500 bg-opacity-50 ${showResults ? "" : "hidden"}`}>
      <div className='w-full md:w-[50%] h-[500px] bg-white flex flex-col flex-wrap items-center'>
        <span className='rounded-full border border-blue-300 mt-2'>
        <IoIosCloseCircleOutline className='text-4xl text-yellow-500' />
        </span>
      </div>
    </div>
  )
}

export default SearchResult;