import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import clsx from "clsx";
const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

function Sidebar() {
  const user = { isAdmin: true };

  const dispatch = useDispatch();

  const location = useLocation();

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(authActions.setOpenSlider(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full mb-3 lg:w-3/4 flex gap-3 px-5 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          location.pathname.includes(el.link)
            ? "bg-[#2564ed] text-yellow-50"
            : ""
        )}>
        {el.icon}
        <span className="hover:text-[#2564ed]">{el.label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">Task Me</span>
      </h1>
      {/* Sider bar Taps */}
      <div className="flex-1 flex-col py-4">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
      {/* Setting buttone */}
      <div className="">
        <button className="w-full flex gap-3 px-5 py-2 items-center text-lg text-gray-800 ">
          <MdSettings />
          <span>Setting</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
