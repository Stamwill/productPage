import * as React from 'react'
import { navList, product, productInfo, productPrice } from 'api/mock'
import AppNav from './partials/AppNav'
import Product from 'blocks/Product'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <AppNav navList={navList} />
      </header>
      <main className={classes.main}>
        <Product product={product} productInfo={productInfo} productPrice={productPrice} />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
