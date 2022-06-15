import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './BasketProducts.module.css'

const BasketProducts = (props) => {
  const { basketItems, productPrice, productTotal } = props

  return (
    <div className={classes.root}>
      <div className={classes.productContainer}>
        <div className={classes.details}>
          <p className={classes.product}>Autumn limited edition...</p>

          <div className={classes.price}>
            {productPrice.map((item, idx) => (
              <span key={idx}>${item.price}</span>
            ))}
            <span className={classes.basketItems}>x {basketItems}</span>{' '}
            <span className={classes.totalPrice}>${productTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BasketProducts.propTypes = {
  basketItems: PropTypes.number,
  productPrice: PropTypes.array,
  productTotal: PropTypes.func,
}

export default BasketProducts
