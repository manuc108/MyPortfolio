import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text text-xl ml-0">MV</p>
        </NavLink>
      <nav className='flex text-lg gap-3 font-medium ml-0'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/certificates' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Certificates
        </NavLink>   
        <NavLink to='/resume' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Resume
        </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;
