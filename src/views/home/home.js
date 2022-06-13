import { sliderData } from './homeData.js';
import Slider from '../../components/slider/slider.js';

export default function Home() {
  return(
    <div>
        <Slider data={sliderData}/>
    </div>
  );
};