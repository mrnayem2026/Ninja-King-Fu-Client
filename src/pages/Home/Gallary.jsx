import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gallary1 from '../../assets/img/gallary1.jpg'
import gallary2 from '../../assets/img/gallary2.jpg'
import gallary3 from '../../assets/img/gallary3.jpg'
import gallary4 from '../../assets/img/gallary4.jpg'
import gallary5 from '../../assets/img/gallary5.jpg'


const Gallary = () => {
  return (
    <div className="bg-[#EDF0F7] py-32">
        {/* top start */}
        <div className="text-center  pb-6">
          <h1 className="font-Oswald text-xl  font-medium text-black">OUR</h1>
          <p className="font-Oswald text-6xl font-medium text-red-600 uppercase">
          image gallery
          </p>
        </div>
        {/* top End */}

      
       <Carousel autoPlay={true}>
                <div>
                    <img src={gallary1} />
                    <p className="legend font-Oswald font-semibold ">Kuna li ai</p>
                </div>
                <div>
                <img src={gallary2} />
                    <p className="legend font-Oswald font-semibold ">Junga Pia</p>
                </div>
                <div>
                <img src={gallary3} />  
                    <p className="legend font-Oswald font-semibold ">Rasti Kiran</p>
                </div>
                <div>
                <img src={gallary4} />  
                    <p className="legend font-Oswald font-semibold ">Bharania</p>
                </div>
                <div>
                <img src={gallary5} />  
                    <p className="legend font-Oswald font-semibold ">Cumi ka</p>
                </div>
            </Carousel>
    </div>
  );
};

export default Gallary;
