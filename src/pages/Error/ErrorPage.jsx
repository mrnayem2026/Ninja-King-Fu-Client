import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../../src/assets/icons/error.png'

const ErrorPage = () => {
  const { error} = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={errorImg} alt="ErrorImg" className='w-2/6'/>
        
        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='btn btn-outline btn-primary text-3xl font-BebasNeue px-10'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage