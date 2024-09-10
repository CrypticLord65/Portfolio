import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Jumbotron fluid className="text-center bg-dark text-white">
            <Container>
                <h1>Welcome to my Roblox Portfolio</h1>
                <p>
                    Showcasing my scripting projects and expertise in Roblox development.
                </p>
                <Button variant="primary" href="#projects">View My Work</Button>
            </Container>
        </Jumbotron>
    );
};

export default Home;