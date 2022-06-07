import * as React from 'react'
import propTypes from 'prop-types'
import classes from './ProductDescription.module.css'

const ProductDescription = (props) => {
  const { productInfo } = props

  return (
    <section className={classes.root}>
      <p className={classes.heading}>{productInfo.heading}</p>
      <h2 className={classes.subHeading}>{productInfo.subHeading}</h2>
      <p className={classes.text}>{productInfo.text}</p>
    </section>
  )
}

ProductDescription.propTypes = {
  productInfo: propTypes.object,
}

export default ProductDescription
