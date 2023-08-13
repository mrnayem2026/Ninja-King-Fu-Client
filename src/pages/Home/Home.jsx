import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import AboutUs from './AboutUs';
import PopularInstructors from './popularInstructors ';
import Workouts from './Workouts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Workouts></Workouts>
            {/* <PopularInstructors></PopularInstructors>
            <AboutUs></AboutUs> */}
        </div>
    );
};

export default Home;