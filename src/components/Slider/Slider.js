import * as React from 'react'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import classes from './Slider.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.module.css'

const Slider = (props) => {
  const { children } = props
  return (
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
  )
}

Slider.propTypes = {
  children: PropTypes.node,
}

export default Slider
