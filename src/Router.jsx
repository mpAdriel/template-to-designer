import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// views
import NotFound from './views/NotFound'
import Shop from './views/Shop'
import Home from './views/Home'
import MUI from './views/MUI'
import PrimeReact from './views/PrimeReact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/mui',
    element: <MUI />
  },
  {
    path: '/prime-react',
    element: <PrimeReact />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router () {
  return (
    <RouterProvider router={router} />
  )
}
