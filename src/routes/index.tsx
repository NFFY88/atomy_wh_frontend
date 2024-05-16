import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorizationPage from '@/pages/AuthorizationPage'
import HomePage from '@/pages/HomePage'
import OrdersPage from '@/pages/OrdersPage'
import OrderDetailPage from '@/pages/OrderDetailPage'
import ProductsPage from '@/pages/ProductsPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import CustomersPage from '@/pages/CustomersPage'
import CustomerDetailPage from '@/pages/CustomerDetailPage'
import Error404Page from '@/pages/Error404Page'
import ProtectedRoute from './components/ProtectedRoute'
import { ROUTES } from './const'

const RoutesElement = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.authorization} element={<AuthorizationPage />} />
        <Route
          path={ROUTES.orders}
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.orderDetail}
          element={
            <ProtectedRoute>
              <OrderDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.products}
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.productsDetail}
          element={
            <ProtectedRoute>
              <ProductDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.customers}
          element={
            <ProtectedRoute>
              <CustomersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.customersDetail}
          element={
            <ProtectedRoute>
              <CustomerDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.error404} element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesElement
