import { useState } from "preact/hooks";

function SliderLanding(props: any) {
  const [current, setCurrent] = useState(0)
  const images = props.images
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1)
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section class='slider'>
    
    </section>
  )
}

export default SliderLanding