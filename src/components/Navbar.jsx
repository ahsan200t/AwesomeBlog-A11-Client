import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
              : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
              : "font-semibold"
          }
        >
         All Blogs
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/add blogs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ?"text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
                : "font-semibold"
            }
          >
            Add Blogs
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            to="/featured"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
                : "font-semibold"
            }
          >
            Featured Blogs
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/wish"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
                : "font-semibold"
            }
          >
           Wishlist

          </NavLink>
        </li>
      )}

      {!user && (
        <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1E677C] border border-[#C57F23] font-bold font-lato bg-gray-300"
                : "font-semibold"
            }
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#E6E7D4] px-4  mb-10 shadow mt-2">
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom z-10 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
         <Link to='/'>
         <a className="text-xl md:text-3xl font-bold font-lato text-[#1E677C]">
            Awesome<span className="text-[#C57F23]">Blogs</span>
          </a>
         </Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">

        {user ? (
          <div className="flex items-center">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              data-tip={user.displayName}
            >
              <div id="loginBtn" className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/2ykmyLP/ahsan.jpg"}
                />
              </div>
            </label>
            <Link to="/">
              <button
                onClick={logOut}
                className="hidden md:btn md:btn-sm md:bg-[#1E677C] md:text-white"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-[#1E677C] text-white">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
