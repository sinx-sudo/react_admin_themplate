import { Link } from "react-router";
import { PanelTopClose,House, Notebook, User2 } from "lucide-react";

const NavbarLeft = ({ isOpen, setIsOpen }:{isOpen:boolean, setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;}) => {
  return (
    <div
      className={`
    fixed top-0 left-0 h-screen w-64 z-50
    bg-gray-800 text-white p-4
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-52"} 
  `}
  //-translate-x-full
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="font-bold mb-4">NavbarLeft</div>

        <PanelTopClose
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "cursor-pointer rotate-90":" cursor-pointer rotate-270"}`}
        />
      </div>

      <hr className="mb-4" />

      {/* Nav */}
      <nav className="flex flex-col gap-3">
        <div className="flex gap-3">
        <House /><Link to="/">Home</Link>
        </div>
        <div className="flex gap-3">
        <Notebook/><Link to="/contact">Contact</Link>
        </div>
        <div className="flex gap-3">
        <User2/><Link to="/user">User</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLeft;