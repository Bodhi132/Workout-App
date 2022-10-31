import React from 'react'
import HeroBannerImage from '../assets/gym-gc471d8730_1920.jpg'
import '../components/HerobannerStyles.css'

const Herobanner = () => {
    return (
        <div className='banner-main'>
            <div className='script'>
                <h2>Fitness Club</h2>
                <div className='quote-1'>
                    Sweat, Smile 
                    <br/>
                    And Repeat
                </div>
                <br />
                <div className='quote-2'>
                    Check out the most effective exercises personalized for you
                </div>
                <br />
                <a href="#exercises" class="button-24" >Explore Exercises</a>
            </div>
            <img src={HeroBannerImage} />
        </div>
    )

}

export default Herobanner