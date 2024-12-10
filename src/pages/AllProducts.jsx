import React, { useEffect, memo, lazy, Suspense } from 'react';
// import { Card } from '../components';
import { CardSkeleton } from '../snippets';
import { useSelector } from 'react-redux';
import useApiQuery from '../hooks/useApiQuery';
const Card = lazy(() => import('../components/Card'));

const AllProducts = () => {

  const category = useSelector(state => state.addToCardSlice.filterData)

  let searchByCategory = "";
  if(category) searchByCategory= `/category/${category}`
  useEffect(() => {
    window.scroll({ top: 0 })
  }, []);

  const { data, isLoading, error } = useApiQuery(`${searchByCategory}`);

  if(error) {
    return <h2 className="text-2xl text-rose-500">{error}</h2>
  }

  // if(isLoading) {
  //   return <CardSkeleton />
  // }


  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center p-4 gap-3">
      <Suspense fallback= {<CardSkeleton /> }>
        {data?.map((item) => (
          <Card
            key={item.id}
            data= {item}
          />
        ))}
      </Suspense>
      
    </div>
  )
}

export default memo(AllProducts)