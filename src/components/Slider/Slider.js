import * as React from 'react'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import classes from './Slider.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.module.css'

const Slider = (props) => {
  const { children, product } = props
  return (
    <div>
      <div className={classes.vOne}>
        <Carousel
          className={classes.root}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          thumbWidth={60}
          animationHandler="fade"
          swipeable={false}
          stopOnHover={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          {children}
        </Carousel>
      </div>
      <div className={classes.vTwo}>
        <Carousel
          className={classes.root}
          showIndicators={false}
          showArrows={false}
          showThumbs={true}
          showStatus={false}
          thumbWidth={60}
          animationHandler="fade"
          swipeable={false}
          stopOnHover={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          {children}
        </Carousel>
      </div>
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node,
  product: PropTypes.array,
}

export default Slider
