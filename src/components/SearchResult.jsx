import React, { useEffect, useState, memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toggleSearchResult, setSearchKey } from "../store/addToCardSlice";
import useFetchUrl from "../hooks/useFetchUrl";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();
  const showResults = useSelector(
    (state) => state.addToCardSlice.showSearchResults
  );
  const inputSearch = useSelector(state => state.addToCardSlice.searchKey);
  const dispatch = useDispatch();

  const handleCloseSearch = useCallback(() => {
    dispatch(toggleSearchResult(false));
    dispatch(setSearchKey(""));
  }, [dispatch]);

  const { data } = useFetchUrl();

  useEffect(() => {
    if(inputSearch.length > 0) {
      const finalResult = data?.filter((items) => items.title.toLowerCase().includes(inputSearch.toLowerCase()) || items.description.toLowerCase().includes(inputSearch.toLowerCase()) )
      setSearchResults(finalResult);
    } else {
      setSearchResults(null)
    } 

    if(inputSearch?.length < 1) {
      dispatch(toggleSearchResult(false));
    }

  }, [inputSearch, data, dispatch])

  const handleSearchItem = (id) => {
    dispatch(toggleSearchResult(false));
    dispatch(setSearchKey(""))
    navigate(`/product/${id}`);
  }
  
  return (
    <div
      className={`w-full h-full fixed flex justify-center bg-gray-500 bg-opacity-50 ${
        showResults ? "" : "hidden"
      }`}
    >
      <div className="w-full md:w-[50%] h-[500px] rounded bg-white flex flex-col flex-wrap items-center">
        <button
          onClick={handleCloseSearch}
          className="rounded-full border border-blue-300 mt-2"
        >
          <IoIosCloseCircleOutline className="text-4xl text-yellow-300" />
        </button> 
        <hr className="border border-yellow-300 w-full mt-2" />
        <div className="w-full h-[430px] overflow-y-auto px-6">
          <ul className="divide-y divide-gray-200 ">

          {
            searchResults?.map((item) => (
              <li key={item.id} className="flex py-2 cursor-pointer" onClick={() => handleSearchItem(item.id)}>
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <img src={item.image} className="w-full h-full" alt="product" />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <div>
                      <span className="">{item.title}</span>
                      <p className="text-sm text-gray-500">{item.description.length > 70 ? item.description.slice(0,70) + "...": item.description}</p>
                    </div>
                    <p className="ml-4">{item.price}</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm"></div>
              </div>
            </li>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchResult);
