import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import AboutUs from './AboutUs';
import PopularInstructors from './popularInstructors ';
import Workouts from './Workouts';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Workouts></Workouts>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            {/* <PopularInstructors></PopularInstructors> */}
        </div>
    );
};

export default Home;