import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container id="contact" className="my-5">
            <h2>Contact Me</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;