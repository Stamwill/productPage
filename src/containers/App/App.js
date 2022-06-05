import * as React from 'react'
import { navList } from 'api/mock'
import classes from './App.module.css'
import AppNav from './partials/AppNav'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <AppNav navList={navList} />
      </header>
      <main className={classes.main}>
        <h1>Main</h1>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
