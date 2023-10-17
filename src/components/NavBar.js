import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  // Using the useAuth hook to access the user object and the logout function
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Link to the home page with a logo */}
              {/* <Link to="/home">
                <img
                  className="h-8 w-8"
                  src="path/to/logo.png"
                  alt="Logo"
                />
              </Link> */}
            </div>
            {/* Navigation links */}
            <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/home"
                  exact
                  activeClassName="bg-gray-900 text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="bg-gray-900 text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="bg-gray-900 text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* If the user is logged in, show user's profile picture, name, and a logout button */}
            {user ? (
              <div className="flex items-center">
                {/* If user has a photoURL, show it. Otherwise, show a default profile picture */}
                <img
                  src={user.photoURL || "path/to/default-avatar.png"}
                  alt={user.displayName}
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span className="text-white px-3 py-2 rounded-md text-sm font-medium">
  {user.displayName}
</span>

                <button
                  onClick={logout}
                  className="ml-4 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center">
                {/* If user is not logged in, show login and register links */}
                <Link
                  to="/login"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-4 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
