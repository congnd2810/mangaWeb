import { useState } from "preact/hooks";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

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
    <section class='slider relative h-screen flex justify-center items-center'>
      <button>
        
      </button>
      <button>

      </button>
      {/* <BsFillArrowLeftCircleFill class='left-arrow absolute top-1/2 left-32px text-3xl text-black z-10 cursor-pointer select-none' onclick={prevSlide} />
      <BsFillArrowRightCircleFill class='right-arrow absolute top-1/2 left-32px text-3xl text-black z-10 cursor-pointer select-none' onclick={nextSlide} /> */}
      {images.map((slide, index) => {
        return (
          <div class={index === current ? 'slide activate' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt='travel image' class='image' />)}
          </div>  
        )
      })}
    </section>
  )
}

export default SliderLanding