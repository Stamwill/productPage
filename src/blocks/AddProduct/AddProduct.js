import * as React from 'react'
import PropTypes from 'prop-types'
import { iconPlus, iconMinus } from 'api/mock'
import classnames from 'clsx'
import classes from './AddProduct.module.css'

const AddProduct = (props) => {
  const { handleAdd, handleSubtract, addedItems } = props
  return (
    <div className={classes.root}>
      <img src={iconMinus} className={classes.subtract} onClick={handleSubtract} />
      <span className={classes.items}>{addedItems}</span>
      <img src={iconPlus} className={classes.add} onClick={handleAdd} />
    </div>
  )
}

AddProduct.propTypes = {
  handleAdd: PropTypes.func,
  handleSubtract: PropTypes.func,
  addedItems: PropTypes.number,
}

export default AddProduct
