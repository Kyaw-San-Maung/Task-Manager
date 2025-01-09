import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../redux/slices/authSlice";
import { getInitials } from "../../utils";

const UserAvator = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const user = { name: "kyawsanmaung" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("Logout");
  };
  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600">
              <span>{getInitials(user?.name)}</span>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default UserAvator;
