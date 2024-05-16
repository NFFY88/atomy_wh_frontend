import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/const'

const Authorization = (): React.ReactElement => {
  return (
    <div>
      <h1>Authorization</h1>

      <Link to={ROUTES.home}>HomePage</Link>
    </div>
  )
}

export default Authorization
