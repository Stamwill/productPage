import * as React from 'react'
import { hamburger } from 'api/mock'
import classnames from 'clsx'
import propTypes from 'prop-types'
import classes from './Hamburger.module.css'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { className, toggleMenu, open } = props

  return (
    <div
      className={classnames(classes.hamburgerMenu, { [classes.menuOpen]: open }, className)}
      ref={ref}
      onClick={toggleMenu}
    >
      <img src={hamburger} alt="hamburger menu" />
    </div>
  )
})

Hamburger.propTypes = {
  className: propTypes.string,
  toggleMenu: propTypes.func,
  open: propTypes.bool,
}

export default Hamburger
