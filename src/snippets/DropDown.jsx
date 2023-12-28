import { IoIosCloseCircleOutline } from "react-icons/io";
import { Button } from ".";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../store/addToCardSlice";

const DropDown = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  return (
    <div className="origin-top-right absolute top-12 right-6 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-between px-1">
      <IoIosCloseCircleOutline
        onClick={() => setIsOpen(false)}
        className="text-rose-400 text-xl mt-2"
      />

      <div className="py-1">
        <Button
          onClick={() => dispatch(filterByCategory(""))}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          All
        </Button>
        <Button
          onClick={() => dispatch(filterByCategory("men's clothing"))}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Men's
        </Button>
        <Button
          onClick={() => dispatch(filterByCategory("women's clothing"))}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Women's
        </Button>
        <Button
          onClick={() => dispatch(filterByCategory("jewelery"))}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Jewelery
        </Button>
        <Button
          onClick={() => dispatch(filterByCategory("electronics"))}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Electronics
        </Button>
        
      </div>
    </div>
  );
};

export default DropDown;
