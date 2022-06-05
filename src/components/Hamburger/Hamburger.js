import * as React from 'react'
import { hamburger } from 'api/mock'
import classes from './Hamburger.module.css'

const Hamburger = (props) => {
  return (
    <div className={classes.hamburgerMenu}>
      <img src={hamburger} alt="hamburger menu" />
    </div>
  )
}

export default Hamburger
