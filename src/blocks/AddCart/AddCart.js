import * as React from 'react'
import { shoppingCartLogo } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './AddCart.module.css'

const AddCart = (props) => {
  const { handleShoppingCart } = props
  return (
    <div className={classes.root} onClick={handleShoppingCart}>
      <img src={shoppingCartLogo} className={classes.cartImg} alt="add to cart" />
      <span>Add to cart</span>
    </div>
  )
}

AddCart.propTypes = {
  handleShoppingCart: PropTypes.func,
}

export default AddCart
