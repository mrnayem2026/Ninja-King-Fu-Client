import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import AboutUs from './AboutUs';
import PopularInstructors from './popularInstructors ';
import Workouts from './Workouts';
import OurServices from './OurServices';
import OurPrograms from './OurPrograms';
import FAQ from './FAQ';
import Gallary from './Gallary';
import CallUs from './CallUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Workouts></Workouts>
            <OurPrograms></OurPrograms>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <PopularInstructors></PopularInstructors>
            <FAQ></FAQ>
            <Gallary></Gallary>
            <CallUs></CallUs>
        </div>
    );
};

export default Home;