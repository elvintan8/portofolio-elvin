import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
    return (
        <Form className='bg-white text-dark p-5 border rounded shadow-sm'>
            <div className='row'>
                <Form.Group className='mb-3 col-lg-6' controlId='firstName'>
                    <Form.Label className='w-100 text-start text-capitalize'>First Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your first name' />
                </Form.Group>
                <Form.Group className='mb-3 col-lg-6' controlId='secondName'>
                    <Form.Label className='w-100 text-start text-capitalize'>Second Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your last name' />
                </Form.Group>
            </div>
            <Form.Group className='mb-3' controlId='emailAddress'>
                <Form.Label className='w-100 text-start text-capitalize'>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter your email address' />
            </Form.Group>
            <Form.Group className='mb-4' controlId='textarea'>
                <Form.Label className='w-100 text-start'>Message</Form.Label>
                <Form.Control as='textarea' rows={4} placeholder='Write your message here' />
            </Form.Group>
            <Button variant='success' type='submit' className='w-100'>Submit</Button>
        </Form>
    );
}

export default ContactForm;
