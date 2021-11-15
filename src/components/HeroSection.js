import React from 'react';
import '../App.css'
import './HeroSection.css';
import { Button } from './Button'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./video/video-1.mp4' autoPlay loop muted />
            <h1>SSPA</h1>
            <p>It all adds up.</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Contact Me</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Need Help <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection;
