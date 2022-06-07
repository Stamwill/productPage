import * as React from 'react'
import Slider from 'components/Slider'
import ProductDescription from 'blocks/ProductDescription'
import ProductPrice from 'blocks/ProductPrice'
import AddProduct from 'blocks/AddProduct'
import AddCart from 'blocks/AddCart'
import PropTypes from 'prop-types'
import classes from './Product.module.css'

const Product = (props) => {
  const { product, productInfo, productPrice, handleAdd, handleSubtract, addedItems } = props
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

      <div className={classes.addCartContainer}>
        <ProductPrice productPrice={productPrice} />
        <AddProduct handleAdd={handleAdd} handleSubtract={handleSubtract} addedItems={addedItems} />
        <AddCart />
      </div>
    </section>
  )
}

Product.propTypes = {
  product: PropTypes.array,
  productInfo: PropTypes.object,
  productPrice: PropTypes.array,
  handleAdd: PropTypes.func,
  addedItems: PropTypes.number,
}

export default Product
