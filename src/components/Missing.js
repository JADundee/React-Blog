import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page Not Found</h2>
        <p>a</p>
        <p>
             <Link to='/'> Back to Homepage</Link>
        </p>
    </main>
  )
}

export default Missing