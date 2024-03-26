import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';

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
              <NavLink to="/lazy1" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path='lazy1' element={ <LazyPage1/> } />
            <Route path='lazy2' element={ <LazyPage2/> } />
            <Route path='lazy3' element={ <LazyPage3/> } />
            <Route path='/*' element={ <Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
