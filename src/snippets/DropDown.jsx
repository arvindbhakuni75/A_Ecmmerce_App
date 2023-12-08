
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "./Button";

const DropDown = ({setIsOpen}) => {
  return (
    <div className="origin-top-right absolute top-12 right-6 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-between px-1">
          <div className="py-1">
            <Button
              onClick={() => {}}
              className="block py-2 px-4 rounded text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 1
            </Button>
            <Button
              onClick={() => {}}
              className="block py-2 px-4 rounded text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 2
            </Button>
            <Button
              onClick={() => {}}
              className="block py-2 px-4 rounded text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 3
            </Button>
          </div>
          <IoIosCloseCircleOutline onClick={()=>setIsOpen(false)} className="text-rose-400 text-xl mt-2" />
        </div>
  )
}

export default DropDown;
