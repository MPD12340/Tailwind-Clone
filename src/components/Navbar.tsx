import { AiFillGithub } from "react-icons/ai";
import { NavLinks } from "../utils/Links";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Mapmethod from "../utils/map";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useMyContext } from "../context/ToggleContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const {isSidebarOpen, setIsSidebarOpen} = useMyContext()
  return (
    <header className="w-screen">
      <nav className="w-[95%] mx-auto flex items-center justify-between px-2 py-4">
        <div className="cursor-pointer">
          <Icon />
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-x-8 text-sm font-semibold dark:text-[#fff]">
            <Mapmethod
              data={NavLinks}
              children={(navLink) => (
                <li key={navLink.id}>
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              )}
            />
          </ul>

          <div className="flex items-center border-l gap-x-6 ml-6 pl-6 border-slate-800">
            <ThemeToggle />
            <AiFillGithub className="w-5 h-5 cursor-pointer dark:text-slate-300 outline-none border-none" />
          </div>
        </div>
        <div className="md:hidden px-6" onClick={()=>setIsSidebarOpen(true)}>
          <HiOutlineDotsVertical className="w-5 h-5 cursor-pointer dark:text-slate-300 outline-none border-none" />
        </div>
        {isSidebarOpen && <Sidebar  />}
      </nav>

    </header>
  );
};

export default Navbar;
