import * as React from 'react'
import Slider from 'components/Slider'
import ProductDescription from 'blocks/ProductDescription'
import ProductPrice from 'blocks/ProductPrice'
import AddProduct from 'blocks/AddProduct'
import AddCart from 'blocks/AddCart'
import PropTypes from 'prop-types'
import classes from './Product.module.css'

const Product = (props) => {
  const {
    product,
    productInfo,
    productPrice,
    handleAdd,
    handleSubtract,
    addedItems,
    handleShoppingCart,
  } = props
  return (
    <section className={classes.root}>
      <div className={classes.imgContainer}>
        <Slider product={product}>
          {product.map((item, idx) => (
            <img className={classes.productImg} src={item.img} alt="test" key={idx} />
          ))}
        </Slider>
      </div>

      <div className={classes.productInfoContainer}>
        <ProductDescription productInfo={productInfo} />
        <ProductPrice productPrice={productPrice} />
        <div className={classes.addCartContainer}>
          <AddProduct
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
            addedItems={addedItems}
          />
          <AddCart handleShoppingCart={handleShoppingCart} />
        </div>
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
