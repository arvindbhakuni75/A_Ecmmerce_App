import React, { useEffect, memo } from 'react';
import { Card } from '../components';
import useFetchUrl from '../hooks/useFetchUrl';
import { CardSkeleton } from '../snippets';
import { useSelector } from 'react-redux';

const AllProducts = () => {

  const category = useSelector(state => state.addToCardSlice.filterData)

  let searchByCategory = "";
  if(category) searchByCategory= `/category/${category}`

  const { data, loading, error } = useFetchUrl(`${searchByCategory}`);

  useEffect(() => {
    window.scroll({ top: 0 })
  })

  if(error) {
    return <h2 className="text-2xl text-rose-500">{error}</h2>
  }

  if(loading) {
    return <CardSkeleton />
  }

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center p-4 gap-3">
      {data?.map((item) => (
        <Card
          key={item.id}
          data= {item}
        />
      ))}
    </div>
  )
}

export default memo(AllProducts)