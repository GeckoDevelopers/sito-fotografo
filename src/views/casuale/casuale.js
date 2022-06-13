import { sliderData } from './casualeData';
import Slider from '../../components/slider/slider.js';

export default function Casuale() {
  return(
    <div>
        <Slider data={sliderData}/>
    </div>
  );
};
