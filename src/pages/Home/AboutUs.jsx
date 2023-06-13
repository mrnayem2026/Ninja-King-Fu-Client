import aboutUsImg from '../../assets/img/about.png'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={aboutUsImg} className="max-w-sm rounded-lg "/>
                <div>
                    <h1 className='text-4xl lg:text-7xl font-Montserrat font-semibold text-[#F87272]'>About Us</h1>
                    <p className='font-Kanit font-extralight text-2xl'>Explore Ninja Kung Fu with us</p>
                    <p className="py-6 w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nihil corrupti cupiditate. Porro perspiciatis corrupti doloribus, odit impedit hic dolorem nisi necessitatibus blanditiis omnis a aspernatur rerum nam sit minus voluptatum eveniet quaerat excepturi totam ratione distinctio fugit dolor. Expedita?</p>
                    <p className="pb-6  w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nihil corrupti cupiditate. Porro perspiciatis corrupti doloribus, odit impedit hic dolorem nisi necessitatibus blanditiis omnis a aspernatur rerum nam sit minus voluptatum eveniet quaerat excepturi totam ratione distinctio fugit dolor. Expedita?</p>
                    <button className="btn btn-outline hover:bg-[#F87272] font-semibold">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;