
import { Link } from 'react-router-dom'

// icons
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

export default function ArrowBack () {
  return (
    <Link className='flex flex-row items-center gap-2 mb-2 hover:-translate-x-2 duration-500' to={'/'}>
      <ArrowLeftIcon className='w-5' />
      <span>Go back</span>
    </Link>
  )
}
