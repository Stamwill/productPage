import * as React from 'react'
import { navList, product, productInfo, productPrice } from 'api/mock'
import AppNav from './partials/AppNav'
import Product from 'blocks/Product'
import classes from './App.module.css'

const App = () => {
  const [addedItems, setAddedItems] = React.useState(0)

  const handleAdd = () => {
    console.log('add')
    setAddedItems((addedItems += 1))
  }
  const handleSubtract = () => {
    console.log('subtract')
    setAddedItems(addedItems + -1)
  }

  return (
    <div className={classes.root}>
      <header>
        <AppNav navList={navList} />
      </header>
      <main className={classes.main}>
        <Product
          product={product}
          productInfo={productInfo}
          productPrice={productPrice}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          addedItems={addedItems}
        />
      </main>
    </div>
  )
}

export default App
