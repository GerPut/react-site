import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    SSPA is registered with:
                </p>
                <div className="footer-img">
                </div>
                <div className="footer-contact">
                    <p>SS Professional Acounting (Pty) Ltd</p>
                    <p>Reg Nr. 0000/000000/00</p>
                    <p>Email : 000000@0000.co.za</p>
                    <p>Mobile : 000 000 0000</p>
                </div>
                <div className="footer-contact">
                    <p>Stephan Smith</p>
                    <p>(SAIPA No:17366)</p>
                    <p>(BCompt UNISA)</p>
                </div>
                <div className="footer-contact">
                    <div class='social-icons'>
                        <div
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-whatsapp' />
                        </div>
                        <div
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='far fa-envelope' />
                        </div>
                    </div>
                </div>
            </section>
            <div class='footer-links'>
                <small class='website-rights'>Developed by coderg 2021</small>
            </div>
        </div>
    );
}

export default Footer;

