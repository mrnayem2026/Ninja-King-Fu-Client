import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const Banner = () => {
    return (
        <div className=''>
            <AwesomeSlider  animation="cubeAnimation">
                <div>sdfkfjksdlfksdjfskljasfasddssaas1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;