import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetchUrl";
import { DetailCardSkeleton } from "../components";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/addToCardSlice";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({ top: 0 })
  }, []);

  const { data, loading, error } = useFetchUrl(
    `${process.env.REACT_APP_BASE_URL}/${id}`
  );

  const handleQuantity = (action) => {
    if (action === "increment" && quantity < 10) {
      setQuantity(quantity + 1);
    }

    if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <DetailCardSkeleton />
    );
  }
  if (error) {
    return <h2 className="text-2xl text-rose-500">{error}</h2>;
  }


  return (
    
    <div className="w-full min-h-screen-[70px] flex justify-center items-center p-4 gap-3">
      <div className="w-3/4 flex justify-between border border-gray-300 shadow-2xl gap-6 rounded-lg p-4 min-h-[520px] bg-white">
        <div className="w-full flex items-center">
          <span>
          <img className="rounded w-full max-h-[450px]" src={data?.image} alt="image" />
          </span>
        </div>
        <div className=" w-full flex flex-col gap-y-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-900">{data?.title}</h2>
            <h2 className="text-lg font-bold text-gray-800">${data?.price}</h2>
          </div>

          <p className="text-gray-600 pb-2">{data?.description}</p>

          <div className="w-full flex flex-col justify-between items-center gap-4">
            <div className="bg-transparent py-2 px-4 text-black border w-full rounded">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleQuantity("decrement")}
                  className="px-6 border rounded "
                >
                  -
                </button>
                <div className="text-gray-800">Quantity: {quantity}</div>
                <button
                  type="button"
                  onClick={() => handleQuantity("increment")}
                  className="px-6 border rounded "
                >
                  +
                </button>
              </div>
            </div>
            <button onClick={() => dispatch(addToCard({data}))} className="bg-yellow-500 py-2 px-4 text-white w-full rounded">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
