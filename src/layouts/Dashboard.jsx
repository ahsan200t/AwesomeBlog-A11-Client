import { NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaEdit, FaHome, FaUsers } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
//  const  isAdmin = true
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
            <h1 className="text-2xl font-bold">MY DASHBOARD</h1>
            <li>
                <NavLink to="/dashboard/admin">
                    <FaHome></FaHome>
                    Admin Home</NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/add-blogs">
                    <FaAddressBook></FaAddressBook>
                    Add Blogs</NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/update-blogs">
                    <FaEdit></FaEdit>
                    Update Blogs</NavLink>
              </li>
            <li>
                <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">User Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">Add Review</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
                <FaHome></FaHome>
                HOME</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contacts">
                CONTACTS</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
