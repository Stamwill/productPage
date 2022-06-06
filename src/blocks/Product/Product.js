import * as React from 'react'
import Slider from 'components/Slider'
import classes from './Product.module.css'
import ProductDescription from 'blocks/ProductDescription'

const Product = (props) => {
  const { product, productInfo, productPrice } = props
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        <Slider>
          {product.map((item, idx) => (
            <img className={classes.productImg} src={item.img} alt="test" key={idx} />
          ))}
        </Slider>
      </div>

      <ProductDescription productInfo={productInfo} />
    </section>
  )
}

export default Product
