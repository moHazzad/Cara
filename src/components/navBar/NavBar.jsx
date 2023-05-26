import React, { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/img/banner/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../AuthProviders/AuthProviders";

function NavBar({cartItems}) {
  const {user,userLogOut} = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const handSignOut = ()=>{
    userLogOut()
    .then(()=>{ })
    .catch(error => console.error(error));
  }
  return (
    <header className=" bg-slate-200 drop-shadow-lg py-2 fixed top-0 left-0 right-0 z-10">
      <nav className="w-[90%] mx-auto relative ">
        <div className="flex justify-between items-center">
          <div className="w-[30%]">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="w-[50%] hidden lg:block">
            <ul className=" flex items-center h-full justify-between">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <>{user? <button onClick={handSignOut} >Log Out</button> : 
              <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/login"
                >
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-[#15b0ab]" : "font-normal"
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              </>
              }</>
              <li>
                
                  {user && user.email }
                
              </li>
              <button className="btn btn-ghost btn-circle">

              <FontAwesomeIcon className='  text-2xl' icon={faHeart} />
              </button>
              <Link to={'/cart'}>
              <label tabindex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartItems}
                  </span>
                </div>
              </label>
              </Link>
            
            </ul>
          </div>
          <div className=" lg:hidden">
            <div>
              {open ? (
                <XMarkIcon
                  className="h-8 w-8 text-gray-700 cursor-pointer "
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <Bars3Icon
                  className="h-8 w-8 text-gray-700 cursor-pointer "
                  onClick={() => setOpen(!open)}
                />
              )}
              {open && (
                <div className="text-right absolute z-10 right-0 top-16">
                  <ul className=" flex flex-col gap-2 ">
                    <li className="">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-[#15b0ab]"
                            : "font-normal"
                        }
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-[#15b0ab]"
                            : "font-normal"
                        }
                        to="/shop"
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-[#15b0ab]"
                            : "font-normal"
                        }
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-[#15b0ab]"
                            : "font-normal"
                        }
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-[#15b0ab]"
                            : "font-normal"
                        }
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                   <button className="btn btn-ghost btn-circle"> <FontAwesomeIcon className='text-2xl' icon={faHeart} /></button>
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {cartItems}
                        </span>
                      </div>
                    </label>
                  </ul>
                    
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
