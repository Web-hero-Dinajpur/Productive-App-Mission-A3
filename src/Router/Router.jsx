import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import ErrorPage from '../Components/ErrorPages/ErrorPage'
import Home from '../Components/Pages/Home/Home'
import Allapps from '../Components/Pages/Allapps/Allapps'
import AppDetails from '../Components/AppDetails/AppDetails'


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('./AppsData.json'),
        Component: Home,
      },
      {
        path: 'app',
        loader: () => fetch('./AppsData.json'),
        Component: Allapps
      },
      {
        path:'/appdetails/:id',
        loader: () => fetch('/AppsData.json'),
        Component:AppDetails,
      }
    ],
  },

])