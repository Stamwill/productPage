import * as React from 'react'
import Hamburger from 'components/Hamburger'
import { logo, shoppingCartLogo, userAvatar } from 'api/mock'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './AppNav.module.css'

const AppNav = (props) => {
  const { navList, toggleMenu, open } = props
  return (
    <section className={classes.root}>
      <Hamburger toggleMenu={toggleMenu} open={open} />
      <div className={classes.companyLogo}>
        <img src={logo} alt="company logo" />
      </div>

      <div className={classes.navBar}>
        {navList.map((item, idx) => (
          <a className={classes.heading} key={idx}>
            {item.heading}
          </a>
        ))}
      </div>

      <div className={classes.userBox}>
        <img
          className={classnames(classes.img, classes.shoppingCart)}
          src={shoppingCartLogo}
          alt="shopping cart"
        />
        <img
          className={classnames(classes.img, classes.userAvatar)}
          src={userAvatar}
          alt="user avatar"
        />
      </div>
    </section>
  )
}

AppNav.propTypes = {
  navList: PropTypes.array,
  toggleMenu: PropTypes.func,
  open: PropTypes.bool,
}

export default AppNav
