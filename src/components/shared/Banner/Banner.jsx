import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import banner1 from '../../../assets/img/banner1.jpg'
import banner2 from '../../../assets/img/banner2.jpg'
import banner3 from '../../../assets/img/banner3.jpg'

const Banner = () => {
    const containerStyle1 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '150vh' // Set the desired height for the background
    };
    const containerStyle2 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '150vh' // Set the desired height for the background
    };
    const containerStyle3 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '150vh' // Set the desired height for the background
    };
    return (
        <div className='pb-20'>
            <AwesomeSlider animation="cubeAnimation">
                <div style={containerStyle1} className='mx-auto container '>
                    <div className='flex gap-4'>
                        <div>
                            <h1>Discover the Art of Combat: Martial Arts Summer Camp</h1>
                            <p>
                                Under the guidance of experienced instructors, you'll learn the ancient techniques and principles that define martial arts. Unleash your inner strength, hone your skills, and forge lifelong friendships, all within the immersive and empowering environment of our Martial Arts Summer Camp.
                            </p>
                        </div>
                        <img src={banner1} alt="" width="500px" height="900px" />
                    </div>
                </div>
                <div style={containerStyle2}>2</div>
                <div style={containerStyle3}>3</div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;