import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './ProductImg.module.css'

const ProductImg = (props) => {
  const { product } = props
  return (
    <div className={classes.imgContainer}>
      <img className={classes.img} src={product[0].thumb} alt="product" />
    </div>
  )
}

ProductImg.propTypes = {
  product: PropTypes.array,
}

export default ProductImg
