import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import logo from "../logo.svg";
//import { LazyPage1, LazyPage2, LazyPage3  } from '../01-lazyload/pages';
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  const getActiveLinkClassName = (isActive: boolean) => {
    return isActive ? "nav-active" : "";
  };

  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, path, name }) => (
                <li key={path}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      getActiveLinkClassName(isActive)
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
