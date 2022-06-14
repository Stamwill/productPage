import * as React from 'react'
import { iconDelete } from 'api/mock'
import classes from './DeleteProduct.module.css'

const DeleteProduct = () => {
  return (
    <div>
      <img src={iconDelete} alt="delete" />
    </div>
  )
}

export default DeleteProduct
