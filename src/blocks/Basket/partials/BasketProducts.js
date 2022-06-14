import * as React from 'react'
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
              <span key={idx}>{item.price}</span>
            ))}
            <span>x{basketItems}</span>{' '}
            <span className={classes.totalPrice}>${productTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketProducts
