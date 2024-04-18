import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo from "../logo.svg";
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage   } from "../03-forms/pages";

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
              <NavLink to="/register" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Dynamic Form</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({isActive}) => getActiveLinkClassName( isActive ) }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path='/formik-basic' element={ <FormikBasicPage/> } />
            <Route path='/formik-yup' element={ <FormikYupPage/> } />
            <Route path='/formik-components' element={ <FormikComponents/> } />
            <Route path='/formik-abstraction' element={ <FormikAbstraction/> } />
            <Route path='users' element={<h1>Users Page</h1>} />
            <Route path='/register' element={ <RegisterPage/> } />
            <Route path='/register-formik' element={ <RegisterFormikPage/> } />
            <Route path='/dynamic-form' element={ <DynamicForm/> } />
            <Route path='/*' element={ <Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
