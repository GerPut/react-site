import React from 'react';
import '../App.css'
import './HeroSection.css';
import { Button } from './Button'



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/video/v1.mp4' autoPlay loop muted />
            <div className="image-box">
                <img src="/sspalogo.png" alt="" height={180} width={230} />
            </div>
        </div>
    )
}

export default HeroSection;
