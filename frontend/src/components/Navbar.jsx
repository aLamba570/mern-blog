import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";  
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState(" ");
  console.log(prompt)
  const navigate = useNavigate();

  const showMenu = () => {
    setMenu(!menu);
  }


  const {user} = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>

      <div className="flex justify-center items-center space-x-0 ">
        <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer">
          <BsSearch />
        </p>
        <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-2" type="text" placeholder="Search" />

      </div>

      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
      </div>

      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer"><FaBars /></p>
        {menu && <Menu/>}
      </div>
    </div>
  );
};

export default Navbar;
