import React from 'react';
import ContactForm from './ContactForm';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // import ikon sosial media

function ContactSection() {
    return (
        <div className='bg-dark text-light py-5' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='mb-5'>Contact Me</h2>
                        <p> 📧 elvintanri6556@gmail.com</p>
                        <p> 📞 0741-742925</p>
                        <p>JAMBI</p>
                        <hr className='w-50 mx-auto' />

                        {/* Social Media Icons Sejajar dengan Informasi Kontak */}
                        <div className="d-flex justify-content-center gap-3 mt-4">
 
    <a href="https://github.com/elvintan8" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="text-light" />
    </a>
    <a href="https://www.instagram.com/elvin_tan_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="text-light" />
    </a>
</div>

                    </div>
                    <div className='col-md-6 mt-5 mt-md-0'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
