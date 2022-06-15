import * as React from 'react'
import { iconDelete } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './DeleteProduct.module.css'

const DeleteProduct = (props) => {
  const { handleDelete } = props
  return (
    <div>
      <img className={classes.bin} src={iconDelete} alt="delete" onClick={handleDelete} />
    </div>
  )
}

DeleteProduct.propTypes = {
  handleDelete: PropTypes.func,
}

export default DeleteProduct
