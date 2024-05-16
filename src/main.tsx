import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { MantineProvider } from '@mantine/core'
import RoutesElement from './routes/index.tsx'
import '@mantine/core/styles.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <HelmetProvider>
        <RoutesElement />
      </HelmetProvider>
    </MantineProvider>
  </React.StrictMode>
)
