import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import ErrorPage from '../Components/ErrorPages/ErrorPage'
import TopBannar from '../Components/Pages/TopBannar/TopBannar'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: TopBannar,
      },
    ],
  },
])