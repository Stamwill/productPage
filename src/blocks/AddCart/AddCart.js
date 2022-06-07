import * as React from 'react'
import { shoppingCartLogo } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './AddCart.module.css'

const AddCart = () => {
  return (
    <div className={classes.root}>
      <img src={shoppingCartLogo} className={classes.cartImg} alt="add to cart" />
      <span>Add to cart</span>
    </div>
  )
}

export default AddCart
