import "./slider.scss";
import { sliderData } from "./sliderData";
import React, { useState } from "react";

export default function Slider() {

	const [contatore, setContatore] = useState(0);

	var sectionStyle = {
    backgroundImage: `url(${sliderData[contatore]?.image})`
  };
	var immagine = [
    <p>{sliderData[contatore]?.text}</p>,
    <div className="carosello" style={sectionStyle} onClick={nextImg}></div>
  ]

	function nextImg() {
		if (contatore >= sliderData.length - 1) {
			setContatore(0);
		} else {
			setContatore(contatore + 1);
		}
	}

	// dots fra version
	var dot = [];
	for (let i = 0; i < sliderData.length; i++) {
		dot.push(<div className={(contatore == i)?"active dot":"dot"} onClick={() => fraDots(i)}></div>);
	}
	function fraDots(i) {
		setContatore(i);
	}

	// dots fabio version
	/* var cat = [];
	sliderData.forEach((e) => {
		cat.push(
	  	<button className="dot" onClick={() => changeImageById(e?.id)}>
	 			{e?.id}
	 		</button>
		);
	});
	function changeImageById(id) {
		setContatore(id);
	} */


  // frecce minus
  function prevImg() {
		if (contatore == 0) {
			setContatore(sliderData.length - 1);
		} else {
			setContatore(contatore - 1);
		}
	}


	return (
		<section id="slider">
      <div className="container">
      
        {immagine}

        <div className="flex">
          <div className="arrow" onClick={prevImg}></div>
          {dot}
          {/* cat */}
          <div className="arrow" onClick={nextImg}></div>
        </div>

        {/* <Link onClick={scrollUp} to="/">vocemenu</Link> */}

      </div>
		</section>
	);
}
