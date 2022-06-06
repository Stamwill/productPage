import * as React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Slider.module.css'

const Slider = (props) => {
  const { children } = props
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      thumbWidth={60}
      animationHandler="fade"
      swipeable={false}
      stopOnHover={true}
      infiniteLoop={true}
    >
      {children}
    </Carousel>
  )
}

export default Slider
