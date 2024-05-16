import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import RoutesElement from './routes/index.tsx'
import '@mantine/core/styles.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RoutesElement />
    </MantineProvider>
  </React.StrictMode>
)
