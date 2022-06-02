import "./slides.scss";
import Slider from '../../components/slider_no_swipe/slider'
import Gallery from '../../components/slider_no_swipe/gallery';
import React, { useState } from "react";

export default function Slides(){

  const [contatore, setContatore] = useState(true);
  
  if (contatore) {
    var viewSlides = <Slider/>
    var show = "Show Gallery"
    var viewGallery = ""
  } else {
    var viewSlides = ""
    var show = "Show Slider"
    var viewGallery = <Gallery/>
  }

  function changeContatore() {
    console.log("test");
    if (contatore) {
      setContatore(false)
    } else {
      setContatore(true)
    }
  }
  return(
    <section id="slides">
        {viewSlides}
        <div className="show" onClick={changeContatore}>{show}</div>
        {viewGallery}
    </section>
  )
}