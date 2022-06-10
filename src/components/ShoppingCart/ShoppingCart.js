import * as React from 'react'
import { shoppingCartLogo } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './ShoppingCart.module.css'

const ShoppingCart = (props) => {
  const { handleShoppingCart, basketItems } = props
  return (
    <div className={classes.root} onClick={handleShoppingCart}>
      <img src={shoppingCartLogo} className={classes.cartImg} alt="Shopping Cart" />
      {basketItems ? <div className={classes.basketCounter}>{basketItems}</div> : null}
    </div>
  )
}

ShoppingCart.propTypes = {
  handleShoppingCart: PropTypes.func,
}

export default ShoppingCart
