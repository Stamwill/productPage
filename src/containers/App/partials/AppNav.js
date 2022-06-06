import * as React from 'react'
import Hamburger from 'components/Hamburger'
import { logo, shoppingCartLogo, userAvatar } from 'api/mock'
import classes from './AppNav.module.css'

const AppNav = (props) => {
  const { navList } = props
  return (
    <section className={classes.root}>
      <Hamburger />
      <div className={classes.companyLogo}>
        <img src={logo} alt="company logo" />
      </div>

      <ul className={classes.navBar}>
        {navList.map((item, idx) => (
          <li className={classes.heading} key={idx}>
            {item.heading}
          </li>
        ))}
      </ul>

      <div className={classes.userBox}>
        <img className={classes.img} src={shoppingCartLogo} alt="shopping cart" />
        <img className={classes.img} src={userAvatar} alt="user avatar" />
      </div>
    </section>
  )
}

export default AppNav
