import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/const'

const Home = (): React.ReactElement => {
  return (
    <div>
      <h1>HomePage</h1>

      <Link to={ROUTES.authorization}>Authorization</Link>
    </div>
  )
}

export default Home
