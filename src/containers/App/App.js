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
  const [basketItems, setBasketItems] = React.useState(0)

  const handleAdd = () => {
    console.log('add')
    setAddedItems((addedItems += 1))
  }
  const handleSubtract = () => {
    console.log('subtract')
    setAddedItems(addedItems + -1)
  }
  const handleShoppingCart = () => {
    setBasketItems(addedItems)
    console.log(`You have added ${addedItems} to the basket`)
  }

  return (
    <div className={classes.root}>
      <header>
        <AppAppBar>
          <AppNav
            navList={navList}
            toggleMenu={toggleMenu}
            open={menuIsOpen}
            basketItems={basketItems}
          />
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
          handleShoppingCart={handleShoppingCart}
        />
      </main>
    </div>
  )
}

export default App
