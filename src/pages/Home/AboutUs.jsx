import aboutUsImg from '../../assets/img/about.png'
import { motion } from 'framer-motion';
const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20">
                {/* <img src={aboutUsImg} className="max-w-sm rounded-lg "/> */}
                <motion.img
                    src={aboutUsImg}
                    className="max-w-sm rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 3 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                />
                <div>
                    <h1 className='text-4xl lg:text-7xl font-Poppins font-semibold text-[#F87272]'>About Us</h1>
                    <p className='font-Oswald font-extralight text-2xl'>Explore Ninja Kung Fu with us</p>
                    <p className="py-6 w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nihil corrupti cupiditate. Porro perspiciatis corrupti doloribus, odit impedit hic dolorem nisi necessitatibus blanditiis omnis a aspernatur rerum nam sit minus voluptatum eveniet quaerat excepturi totam ratione distinctio fugit dolor. Expedita?</p>
                    <p className="pb-6  w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nihil corrupti cupiditate. Porro perspiciatis corrupti doloribus, odit impedit hic dolorem nisi necessitatibus blanditiis omnis a aspernatur rerum nam sit minus voluptatum eveniet quaerat excepturi totam ratione distinctio fugit dolor. Expedita?</p>
                    <button className="btn btn-outline hover:bg-[#F87272] font-semibold">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;