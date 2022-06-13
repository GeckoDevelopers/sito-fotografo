import Slider from '../../components/slider/slider.js';
import { sliderData } from './siciliaData';

export default function Sicilia() {
  return(
    <div>
        <Slider data={sliderData}/>
    </div>
  );
};