import * as React from 'react'
import { navList, product, productInfo, productPrice } from 'api/mock'
import AppNav from './partials/AppNav'
import Product from 'blocks/Product'
import classes from './App.module.css'
import AppAppBar from 'containers/AppAppBar/AppAppBar'
import AppDrawer from './partials/partials/AppDrawer'

const App = () => {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

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
        <AppAppBar>
          <AppNav navList={navList} toggleMenu={toggleMenu} open={menuIsOpen} />
          <AppDrawer toggleMenu={toggleMenu} open={menuIsOpen} />
        </AppAppBar>
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
