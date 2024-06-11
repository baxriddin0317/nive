import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

const Dropdown = () => {
  return (
    <>
      <Menu>
        <MenuButton>
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={7} viewBox="0 0 15 7" fill="none">
            <path d="M14.1429 1.14286C14.1429 1.35125 14.0601 1.5511 13.9127 1.69845C13.7654 1.8458 13.5655 1.92858 13.3571 1.92858H0.785715C0.57733 1.92858 0.377481 1.8458 0.230131 1.69845C0.0827807 1.5511 0 1.35125 0 1.14286C0 0.934477 0.0827807 0.734627 0.230131 0.587277C0.377481 0.439927 0.57733 0.357147 0.785715 0.357147H13.3571C13.5655 0.357147 13.7654 0.439927 13.9127 0.587277C14.0601 0.734627 14.1429 0.934477 14.1429 1.14286ZM9.42857 5.07143H4.71429C4.5059 5.07143 4.30605 5.15421 4.1587 5.30156C4.01135 5.44891 3.92857 5.64876 3.92857 5.85715C3.92857 6.06553 4.01135 6.26538 4.1587 6.41273C4.30605 6.56008 4.5059 6.64286 4.71429 6.64286H9.42857C9.63696 6.64286 9.83681 6.56008 9.98416 6.41273C10.1315 6.26538 10.2143 6.06553 10.2143 5.85715C10.2143 5.64876 10.1315 5.44891 9.98416 5.30156C9.83681 5.15421 9.63696 5.07143 9.42857 5.07143Z" fill="white" />
          </svg>
        </MenuButton>
        <MenuItems 
          anchor="bottom end"
          className="translate-y-5 py-4 bg-brand-black-100 rounded opacity-1 border border-brand-black-200"  
        >
          <MenuItem className="hover:bg-brand-black-200 w-full px-5 cursor-pointer py-2">
            <p>Settings</p>
          </MenuItem>
          <MenuItem className="hover:bg-brand-black-200 w-full px-5 cursor-pointer py-2">
          <p>Settings</p>
          </MenuItem>
          <MenuItem className="hover:bg-brand-black-200 w-full px-5 cursor-pointer py-2">
          <p>Settings</p>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default Dropdown;