import * as React from 'react'
import classes from './Product.module.css'

const Product = (props) => {
  const { product, productInfo, productPrice } = props
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.productImg} src={product[0].img} alt="test" />
      </div>
    </section>
  )
}

export default Product
