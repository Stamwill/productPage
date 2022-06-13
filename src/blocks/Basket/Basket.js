import * as React from 'react'
import propTypes from 'prop-types'
import { iconDelete, product } from 'api/mock'
import classnames from 'clsx'
import classes from './Basket.module.css'

const Basket = (props) => {
  const { toggleBasket, basketIsOpen, basketItems } = props
  return (
    <section className={classnames(classes.root, { [classes.open]: basketIsOpen })}>
      <div className={classes.basketContainer}>
        <div className={classes.headingContainer}>
          <h3 className={classes.heading}>Cart</h3>
        </div>

        <div className={classes.productContainer}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={product[0].thumb} alt="product" />
          </div>
          <div className={classes.product}>
            <p className={classes.product}>Autumn limited edition...</p>
            <p className={classes.price}>
              $125.00 x 3 <span className={classes.totalPrice}>$375.00</span>
            </p>
          </div>
          <div>
            <img src={iconDelete} alt="delete" />
          </div>
        </div>
        <div className={classes.checkout}>
          <button className={classes.btn}>Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Basket
