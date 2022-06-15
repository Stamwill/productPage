import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Checkout.module.css'

const Checkout = (props) => {
  const { toggleBasket } = props
  return (
    <div className={classes.checkout}>
      <button className={classes.btn} onClick={toggleBasket}>
        Checkout
      </button>
    </div>
  )
}

Checkout.propTypes = {
  toggleBasket: PropTypes.func,
}

export default Checkout
