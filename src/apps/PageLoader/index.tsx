import { Loader } from '@mantine/core'
import React from 'react'
import classes from './styles/page_loader.module.scss'

const PageLoader = (): React.ReactElement => {
  return (
    <div className={classes.wrap}>
      <Loader size='xl' type='bars' />
    </div>
  )
}

export default PageLoader
