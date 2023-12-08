import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdFilterAlt } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCheckOut,
  toggleSearchResult,
  setSearchKey,
} from "../store/addToCardSlice";
import { DropDown, Input } from "../snippets";

const Navbar = () => {
  const cardItems = useSelector((state) => state.addToCardSlice.cardProducts);
  const inputSearch = useSelector((state) => state.addToCardSlice.searchKey);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(toggleSearchResult(true));
    dispatch(setSearchKey(e.target.value));
  };

  //
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //

  return (
    <>
      <div className="w-full px-6 md:px-10 h-[70px] border-b sticky top-0 bg-white flex justify-between items-center border-gray-200 ">
        <h2 className="text-xl text-yellow-500">Home</h2>
        <div className="w-1/3">
          <span className="flex items-center gap-2 px-4 rounded border">
            <GoSearch className="text-yellow-400 text-2xl" />
            <Input
              value={inputSearch}
              onChange={(e) => handleSearchInput(e)}
              className="p-2 w-full focus:outline-none"
              type="text"
              placeholder="Search. . ."
            />
          </span>
        </div>
        <div className="flex items-center gap-6">
          <FaUserAlt className="text-xl text-yellow-400" />
          <MdFilterAlt
            onClick={toggleDropdown}
            className="text-2xl text-yellow-400 relative inline-block"
          />

          {isOpen && <DropDown setIsOpen={setIsOpen} />}

          <span
            onClick={() => {
              dispatch(toggleCheckOut(true));
            }}
            className="relative cursor-pointer"
          >
            <RiShoppingCart2Fill className="text-2xl text-yellow-400" />
            {cardItems.length > 0 && (
              <span className="w-[14px] h-[14px] bg-blue-500 rounded-full z-10 absolute top-0 right-0 text-white flex items-center justify-center text-[8px] font-bold border border-white">
                {cardItems.length}
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
