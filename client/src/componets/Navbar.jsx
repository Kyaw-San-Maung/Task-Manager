import { FaHamburger } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  const user = true;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
      {/* right side */}
      <div className="flex gap-4">
        <button
          className="text-2xl text-gray-500 block md:hidden"
          onClick={() => dispatch(authActions.setOpenSlider(true))}>
          <FaHamburger />
        </button>

        <div className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
          <MdOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
          />
        </div>
      </div>
      {/* left side */}
      <div className="flex gap-2 items-center">
        {/* Notification */}

        {/* user avator */}
      </div>
    </div>
  );
};

export default Navbar;
