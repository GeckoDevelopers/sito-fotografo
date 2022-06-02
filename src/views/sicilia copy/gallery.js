import "./gallery.scss";
import { sliderData } from "./sliderData";
import React, { useState } from "react";

export default function Gallery() {

	const [contatore, setContatore] = useState(0);

	var gallery = [];
	for (let i = 0; i < sliderData.length; i++) {
		var sectionStyle = {
			backgroundImage: `url(${sliderData[i]?.image})`
		};
		gallery.push(<div className="carosello" style={sectionStyle}></div>);
	}

	return (
		<section id="gallery">
      <div className="container">
      
        {gallery}

      </div>
		</section>
	);
}
