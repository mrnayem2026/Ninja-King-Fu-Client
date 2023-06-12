import { Button, Carousel } from 'flowbite-react';
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
        height: '100vh' 
    };
    const containerStyle2 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh' 
    };
    const containerStyle3 = {
        position: 'relative',
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${banner3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh' 
    };
    return (
        <div className='h-screen pb-10 '>
            <Carousel>
                {/* 1ST BANNER  */}
                <div style={containerStyle1}>
                    <div className='flex flex-col lg:flex-row lg:gap-4 px-4'>
                        <div className='lg:pt-40 lg:pl-16 pb-7'>
                            <h1 className='font-Kanit font-semibold text-3xl pt-7 lg:text-5xl lg:pb-5 text-transparent  bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'>Discover the Art of Combat <br /> Martial Arts Summer Camp</h1>
                            <p className='font-Montserrat font-thin text-sm py-4'>
                                Under the guidance of experienced instructors, you'll learn the ancient techniques and principles that define martial arts. Unleash your inner strength, hone your skills, and forge lifelong friendships, all within the immersive and empowering environment of our Martial Arts Summer Camp.
                            </p>
                            <div className='lg:py-4 '>
                                <button className='btn border-0 text-white mr-4 bg-gradient-to-r from-violet-600 to-indigo-600'>Start free trial</button>
                                <button className='btn btn-outline hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white'>Learn more</button>
                            </div>
                        </div>
                        <img src={banner1} alt="" width="500px" height="900px" className='border-dashed border-2 border-violet-600 p-2 rounded lg:mt-40 lg:ml-9' />
                    </div>
                </div>
                {/* 2nd BANNER  */}
                <div style={containerStyle2}>
                    <div className='flex flex-col lg:flex-row lg:gap-4 px-4'>
                        <img src={banner2} alt="" width="500px" height="900px" className='border-dashed border-2 border-violet-600 p-2 rounded lg:mt-40 lg:ml-9' />
                        <div className='lg:pt-40 lg:pl-16 pb-7'>
                            <h1 className='font-Kanit font-semibold text-3xl pt-7 lg:text-5xl lg:pb-5 text-transparent  bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'>Warrior Training Grounds <br /> Martial Arts Summer Camp</h1>
                            <p className='font-Montserrat font-thin text-sm py-4'>
                                At Warrior Training Grounds, our Martial Arts Summer Camp offers an unparalleled opportunity to train alongside dedicated instructors, push your limits, and uncover the true warrior within you. Join us for a transformative experience where discipline, perseverance, and camaraderie flourish.
                            </p>
                            <div className='lg:py-4 '>
                                <button className='btn border-0 text-white mr-4 bg-gradient-to-r from-violet-600 to-indigo-600'>Start free trial</button>
                                <button className='btn btn-outline hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white'>Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* 3rd BANNER  */}
                <div style={containerStyle3}>
                    <div className='flex flex-col lg:flex-row lg:gap-4 px-4'>
                        <div className='lg:pt-40 lg:pl-16 pb-7'>
                            <h1 className='font-Kanit font-semibold text-3xl pt-7 lg:text-5xl lg:pb-5 text-transparent  bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600'>The Way of the Fighter <br /> Summer Camp Martial Arts School</h1>
                            <p className='font-Montserrat font-thin text-sm py-4'>
                                Immerse yourself in the ancient traditions and philosophies of martial arts at The Way of the Fighter. Our Summer Camp Martial Arts School will guide you on a path of self-discovery, where resilience, respect, and discipline intertwine to shape you into a skilled fighter both inside and outside the ring. Embrace the journey and embrace your inner warrior.
                            </p>
                            <div className='lg:py-4 '>
                                <button className='btn border-0 text-white mr-4 bg-gradient-to-r from-violet-600 to-indigo-600'>Start free trial</button>
                                <button className='btn btn-outline hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white'>Learn more</button>
                            </div>
                        </div>
                        <img src={banner3} alt="" width="500px" height="900px" className='border-dashed border-2 border-violet-600 p-2 rounded lg:mt-40 lg:ml-9' />
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;