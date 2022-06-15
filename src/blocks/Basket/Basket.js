import * as React from 'react'
import PropTypes from 'prop-types'
import { product, productPrice } from 'api/mock'
import classnames from 'clsx'
import classes from './Basket.module.css'
import BasketProducts from './partials/BasketProducts'
import DeleteProduct from './partials/DeleteProduct'
import Checkout from './partials/Checkout'
import ProductImg from './partials/ProductImg'

const productPriceOne = productPrice[0].price
const Basket = (props) => {
  const { toggleBasket, basketIsOpen, basketItems, handleDelete } = props

  const productTotal = () => {
    let multiply = basketItems * Number(productPriceOne)
    return multiply.toFixed(2).toString()
  }

  return (
    <section className={classnames(classes.root, { [classes.open]: basketIsOpen })}>
      <div className={classes.basketContainer}>
        <div className={classes.headingContainer}>
          <h3 className={classes.heading}>Cart</h3>
        </div>

        {basketItems ? (
          <div className={classes.products}>
            <ProductImg product={product} />
            <BasketProducts
              basketItems={basketItems}
              productPrice={productPrice}
              productTotal={productTotal}
            />
            <DeleteProduct handleDelete={handleDelete} />
          </div>
        ) : (
          <p className={classes.emptyBasket}>Basket is empty</p>
        )}
        <Checkout />
      </div>
    </section>
  )
}

Basket.propTypes = {
  toggleBasket: PropTypes.func,
  basketIsOpen: PropTypes.bool,
  basketItems: PropTypes.number,
  handleDelete: PropTypes.func,
}

export default Basket
