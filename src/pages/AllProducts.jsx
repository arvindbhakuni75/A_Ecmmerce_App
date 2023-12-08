import React from 'react';
import { Card } from '../components';
import useFetchUrl from '../hooks/useFetchUrl';
import { CardSkeleton } from '../snippets';

const AllProducts = () => {

    const { data, loading, error } = useFetchUrl();

  if(error) {
    return <h2 className="text-2xl text-rose-500">{error}</h2>
  }

  if(loading) {
    return (
      <CardSkeleton />
    )
  }
  console.log(data)

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 gap-3">
      {data?.map((item) => (
        <Card
          key={item.id}
          data= {item}
        />
      ))}
    </div>
  )
}

export default AllProducts