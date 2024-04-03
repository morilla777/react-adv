import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

export const Navigation = () => {

  const getActiveLinkClassName = ( isActive: boolean) => {
    return isActive ? 'nav-active' : '';
  }

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path='about' element={<h1>About Page</h1>} />
            <Route path='users' element={<h1>Users Page</h1>} />
            <Route path='home' element={ <ShoppingPage/> } />
            <Route path='/*' element={ <Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
