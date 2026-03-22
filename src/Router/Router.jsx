import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import ErrorPage from '../Components/ErrorPages/ErrorPage'
import Home from '../Components/Pages/Home/Home'
import Allapps from '../Components/Pages/Allapps/Allapps'


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
      }
    ],
  },

])