import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./slider.css"
import TestimonialCard from "../../../components/testimonial/TestimonialCard"


const slidedata = [
  {
    _id: 1,
    img:"https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?w=900&t=st=1685638386~exp=1685638986~hmac=08bdd6990ff3da3c3a856e43dde837c75926af85d0e6dd7b0338af4aa67339db",
    name:"Awal Hossain",
    position: "Products Designer",
    feedBack: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
  },
  {
    _id: 2,
    img:"https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?w=900&t=st=1685638386~exp=1685638986~hmac=08bdd6990ff3da3c3a856e43dde837c75926af85d0e6dd7b0338af4aa67339db",
    name:"Abid Hossain",
    position: "Web Designer",
    feedBack: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
  },
  {
    _id: 3,
    img:"https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?w=900&t=st=1685638386~exp=1685638986~hmac=08bdd6990ff3da3c3a856e43dde837c75926af85d0e6dd7b0338af4aa67339db",
    name:"rokon Hossain",
    position: "Digital Designer",
    feedBack: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
  },
  {
    _id: 4,
    img:"https://img.freepik.com/free-photo/man-with-thumb-up_1368-3701.jpg?w=900&t=st=1685638386~exp=1685638986~hmac=08bdd6990ff3da3c3a856e43dde837c75926af85d0e6dd7b0338af4aa67339db",
    name:"Kabil Hossain",
    position: "Graphics Designer",
    feedBack: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines."
  },
]


export const Sliders= () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
       {
         slidedata.map(n=> <div key={n._id} className="keen-slider__slide "><TestimonialCard key={n._id} content ={n}></TestimonialCard> </div>)  
       }
  
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
     
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
