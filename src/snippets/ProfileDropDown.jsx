import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Button } from ".";
import { useAuth0 } from '@auth0/auth0-react';

const ProfileDropDown = ({setIsProfileOpen}) => {

  const { logout } = useAuth0()

  return (
    <div className="origin-top-right absolute top-12 right-20 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-between px-1">
      <IoIosCloseCircleOutline
        onClick={() => setIsProfileOpen(false)}
        className="text-rose-400 text-xl mt-2"
      />

      <div className="py-1">
        <Button
          // onClick={""}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </Button>
        <Button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="block py-2 px-2 rounded text-sm text-gray-700 hover:bg-gray-100"
        >
          Log out
        </Button>
        
      </div>
    </div>
  )
}

export default ProfileDropDown
