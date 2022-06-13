import Slider from '../../components/slider/slider.js';
import { sliderData } from './testData';

export default function Test() {
  return(
    <div>
        <Slider data={sliderData}/>
    </div>
  );
};