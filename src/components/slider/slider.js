import "./slider.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Slider({data}){

  const [contatore, setContatore] = useState(0);
  var datas = data
  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();


	// dots fra version
	var dot = [];
	for (let i = 0; i < datas.length; i++) {
		dot.push(<div className={(contatore === i)?"active dot":"dot"} onClick={() => fraDots(i)}></div>);
	}

  // display del carosello
  var immagine = [
		<p className="img_description">{datas[contatore]?.text}</p>,
		<img alt="immagine mancante" className="carosello" src={datas[contatore]?.image} />
  ]


  // display della gallery
  var gallery = [];
	for (let i = 0; i < datas.length; i++) {
		gallery.push(<img alt="immagine mancante la vendetta" className="gallery-img" src={datas[i]?.image} onClick={() => getImageById(i)} />);
	}

  // bottone gallery/slider che cambia testo
  const [trueFalse, setTrueFolse] = useState(true);
  if (trueFalse) {
    var show = "Show Gallery"
  } else {
    var show = "Show Slider"
  }
  
  //#region funzioni
  function changeContatore() {
    if (trueFalse) {
      setTrueFolse(false)
    } else {
      setTrueFolse(true)
    }
  }

    function getImageById(immageId) {
        console.log(immageId, "immageId");
        setTrueFolse(true);
        setContatore(immageId)
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

  // funzioni per il cambio immagine nel carosello
    function nextImg() {
        if (contatore >= datas.length - 1) {
            setContatore(0);
        } else {
            setContatore(contatore + 1);
        }
    }
  //#endregion
  
  return(
    <section id="imageViewer">
      <div className="container-slider">

        <div className="show" onClick={changeContatore}>{show}</div>

        {trueFalse 
        ?
        <div className="slider">
          {immagine[0]}
          <div className="img-container" onClick={nextImg}>
            {immagine[1]}
          </div>

          <div className="slider-comands">
            <div className="arrow" onClick={prevImg}>
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            {dot}
            <div className="arrow" onClick={nextImg}>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        : 
        <div className="gallery">
          {gallery}
        </div>
        }

      </div>
    </section>
  )
}