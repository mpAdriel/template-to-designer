
import { Link } from 'react-router-dom'

// icons
import { ShoppingBagIcon, ShieldExclamationIcon, Squares2X2Icon, Square3Stack3DIcon } from '@heroicons/react/20/solid'

export default function Home () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className='flex flex-row gap-2' to="/shop">
              <ShoppingBagIcon className='w-5' />
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-row gap-2' to="/mui">
              <Square3Stack3DIcon className='w-5' />
              <span>MUI</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-row gap-2' to="/prime-react">
              <Squares2X2Icon className='w-5' />
              <span>Prime React</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-row gap-2' to="/not-found">
              <ShieldExclamationIcon className='w-5' />
              <span>Not found page</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
