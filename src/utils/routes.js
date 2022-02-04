import { HOME, NEW_TABLE, OPTION, LOGIN, REGISTER, ALL_TABLE } from "../helpers/url"

import Home from '../pages/home/Home';
import Table from '../pages/table/Table'
import Option from '../pages/option/Option'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Tables from '../pages/tables/Tables'

export const publicRoutes = [
  {
    path: HOME,
    Component: Home
  },
  {
    path: NEW_TABLE,
    Component: Table
  },
  {
    path: OPTION,
    Component: Option
  },
  {
    path: LOGIN,
    Component: Login
  },
  {
    path: REGISTER,
    Component: Register
  },
  {
    path: ALL_TABLE,
    Component: Tables
  }
]