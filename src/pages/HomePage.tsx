import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import PageLoader from '@/apps/PageLoader'

const Home = React.lazy(() => import('@/apps/Home'))

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>

      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    </>
  )
}

export default HomePage
