import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import AboutUs from './AboutUs';
import PopularInstructors from './popularInstructors ';
import Workouts from './Workouts';
import OurServices from './OurServices';
import OurPrograms from './OurPrograms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Workouts></Workouts>
            <OurPrograms></OurPrograms>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            {/* <PopularInstructors></PopularInstructors> */}
        </div>
    );
};

export default Home;