import React from 'react';
import AboutImg from '../assets/images/about-img.jpg';
import ViewMyWorkBtn from './ViewMyWorkBtn';

function AboutSection() {
    return (
        <div className='bg-dark text-light py-5' id='about'>
            <div className='container'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                        <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='mb-4'>About me</h2>
                        <p className='text-start mb-2 fw-bold'>School:</p>
                        <ul className='list-unstyled text-start mb-4'>
                            <li>TK/SD XAVERIUS 1 JAMBI</li>
                            <li>SMP XAVERIUS 2 JAMBI</li>
                            <li>SMA XAVERIUS 1 JAMBI</li>
                        </ul>
                        <p className='text-start mb-2 fw-bold'>University:</p>
                        <ul className='list-unstyled text-start mb-4'>
                            <li>UNIVERSITAS DINAMIKA BANGSA</li>
                        </ul>
                        <p className='text-start mb-2 fw-bold'>Hobby:</p>
                        <ul className='list-unstyled text-start mb-4'>
                            <li>Mendengarkan Lagu 🎧</li>
                            <li>Olahraga 🏃</li>
                            <li>Foto </li>
                        </ul>
                        <ViewMyWorkBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
