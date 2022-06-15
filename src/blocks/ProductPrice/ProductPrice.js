import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './ProductPrice.module.css'

const ProductPrice = (props) => {
  const { productPrice } = props
  return (
    <div className={classes.root}>
      {productPrice.map((price, idx) => (
        <div className={classes.priceContainer} key={idx}>
          <div className={classes.priceSubContainer}>
            <p className={classes.price}>${price.price}</p>
            <p className={classes.sale}>{price.sale}</p>
          </div>
          <p className={classes.oldPrice}>{price.oldPrice}</p>
        </div>
      ))}
    </div>
  )
}

ProductPrice.propTypes = {
  productPrice: PropTypes.array,
}

export default ProductPrice
