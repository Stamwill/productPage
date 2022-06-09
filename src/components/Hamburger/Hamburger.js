import * as React from 'react'
import { hamburger } from 'api/mock'
import classnames from 'clsx'
import PropTypes from 'prop-types'
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
  className: PropTypes.string,
  toggleMenu: PropTypes.func,
  open: PropTypes.bool,
}

export default Hamburger
