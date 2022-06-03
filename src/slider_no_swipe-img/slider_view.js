import "./slider_view.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { sliderData as home } from "./datas/homeData";
import { sliderData as sicilia } from "./datas/siciliaData";
import { sliderData as casuale } from "./datas/casualeData";
import { sliderData as test } from "./datas/testData";


export default function Slider_view(){

  const [contatore, setContatore] = useState(0);

  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();


  // cambio della path
  switch (location.pathname) {
    case "/":
      /* console.log("pat /home"); */
      var datas = home
      break;
    case "/sicilia":
      /* console.log("pat /sicilia"); */
      var datas = sicilia
      break;
    case "/casuale":
      /* console.log("pat /casuale"); */
      var datas = casuale
      break;
    case "/test":
      /* console.log("pat /test"); */
      var datas = test
      break;
    default:
      /* console.log("sei stronzo. tu non sai perche ma javascript si"); */
      break;
  }



  // funzioni per il cambio immagine nel carosello
	function nextImg() {
		if (contatore >= datas.length - 1) {
			setContatore(0);
		} else {
			setContatore(contatore + 1);
		}
	}
	// dots fra version
	var dot = [];
	for (let i = 0; i < datas.length; i++) {
		dot.push(<div className={(contatore === i)?"active dot":"dot"} onClick={() => fraDots(i)}></div>);
	}
	function fraDots(i) {
		setContatore(i);
	}
  // frecce minus
  function prevImg() {
		if (contatore === 0) {
			setContatore(datas.length - 1);
		} else {
			setContatore(contatore - 1);
		}
	}


  // display del carosello
	var immagine = [
    <p>{datas[contatore]?.text}</p>,
    <img alt="mi fai schifo" className="carosello" src={datas[contatore]?.image} />
  ]


  // display della gallery
  var gallery = [];
	for (let i = 0; i < datas.length; i++) {
		gallery.push(<img alt="mi fai schifo la vendetta" className="carosello" src={datas[i]?.image} />);
	}


  // bottone gallery/slider che cambia testo
  const [trueFolse, setTrueFolse] = useState(true);
  if (trueFolse) {
    var show = "Show Gallery"
  } else {
    var show = "Show Slider"
  }
  function changeContatore() {
    if (trueFolse) {
      setTrueFolse(false)
    } else {
      setTrueFolse(true)
    }
  }


  
  return(
    <section id="slider_view-img">
      <div className="container">
        <section id="slider-img">

          <div className="show" onClick={changeContatore}>{show}</div>

          {trueFolse 
            ?
            <div>
              {immagine[0]}
              <div className="img-container" onClick={nextImg}>
                {immagine[1]}
              </div>

              <div className="flex">
                <div className="arrow" onClick={prevImg}></div>
                {dot}
                <div className="arrow" onClick={nextImg}></div>
              </div>
            </div>
            : 
            <div id="gallery-img">
              {gallery}
            </div>
          }

        </section>
      </div>
    </section>
  )
}