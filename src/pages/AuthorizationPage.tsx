import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import PageLoader from '@/apps/PageLoader'

const Authorization = React.lazy(() => import('@/apps/Authorization'))

const AuthorizationPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Authorization</title>
      </Helmet>

      <Suspense fallback={<PageLoader />}>
        <Authorization />
      </Suspense>
    </>
  )
}

export default AuthorizationPage
