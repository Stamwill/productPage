import * as React from 'react'
import classnames from 'clsx'
import { navList, iconClose } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './AppDrawer.module.css'

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { className, open, toggleMenu, ...other } = props

  React.useEffect(() => {
    const toggleScroll = (state) => {
      if (typeof window !== undefined) {
        const body = document.body

        body.style.overflow = state
      }
    }

    if (open) {
      toggleScroll('hidden')
    } else {
      toggleScroll('visible')
    }
  })

  return (
    <div
      className={classnames(classes.root, { [classes.menuIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <img
        className={classes.iconClose}
        src={iconClose}
        alt="close hamburger"
        onClick={toggleMenu}
      />

      <div className={classes.navBar}>
        {navList.map((nav, idx) => (
          <div key={idx}>
            <a className={classes.navLink} href={'#'}>
              {nav.heading}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default AppDrawer
