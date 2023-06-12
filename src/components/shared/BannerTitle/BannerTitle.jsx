const BannerTitle = ({ title, subtitle }) => {
    return (
        <div >
            <div className=" text-center py-8 pb-12">
                <h1 className=" font-HindVadodara font-black text-5xl text-[#36D399]">{title}</h1>
                <p className="font-HindVadodara font-thin text-xl text-[#A6ADBA]">{subtitle}</p>
            </div>
        </div>
    );
};

export default BannerTitle;