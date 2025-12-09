import React from 'react'
import Poster from '../components/home/Poster'
import Categories from '../components/home/Categories'
import BestSeller from '../components/home/BestSeller'
import Deals from '../components/home/Deals'
import Testmoniails from '../components/home/Testimonials'
import InstagramStories from '../components/home/InstagramStories'

export default function Home() {
    return (
        <>
            <Poster />

            <div className="section-gap">
                <Categories />
            </div>

            <div className="section-gap">
                <BestSeller />
            </div>

            <div className="section-gap">
                <Deals />
            </div>
            <div className="section-gap">
                <Testmoniails />
            </div>
            <div className="section-gap">
                <InstagramStories />
            </div>
            <div className="section-gap">
                
            </div>
        </>
    );

}
