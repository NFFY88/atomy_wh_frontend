import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLoader from '@/apps/PageLoader'
import { ROUTES } from '../const'
import { useCurrentUser } from '@/hooks'

interface IProtectedRoute {
  children: React.ReactElement
}

const ProtectedRoute = ({ children }: IProtectedRoute): React.ReactElement => {
  const { currentUser, isLoading } = useCurrentUser()
  const navigate = useNavigate()

  const isUserLogined = currentUser !== null

  useEffect(() => {
    if (!isUserLogined && !isLoading)
      navigate(ROUTES.authorization, {
        state: { from: window.location.pathname }
      })
  }, [currentUser])

  if (isLoading) {
    return <PageLoader />
  }

  if (!isLoading && isUserLogined) return children

  return <></>
}

export default ProtectedRoute
