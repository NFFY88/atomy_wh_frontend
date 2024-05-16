import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import PageLoader from '@/apps/PageLoader'

const CustomerDetail = React.lazy(() => import('@/apps/CustomerDetail'))

const CustomerDetailPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>CustomerDetail</title>
      </Helmet>

      <Suspense fallback={<PageLoader />}>
        <CustomerDetail />
      </Suspense>
    </>
  )
}

export default CustomerDetailPage
