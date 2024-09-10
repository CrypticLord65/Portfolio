import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const projectData = [
    {
        title: 'Game Title 1',
        description: 'Description of your first Roblox game project.',
        image: 'path/to/image1.jpg',
    },
    {
        title: 'Game Title 2',
        description: 'Description of your second Roblox game project.',
        image: 'path/to/image2.jpg',
    },
];

const Projects = () => {
    return (
        <Container id="projects" className="my-5">
            <h2 className="text-center mb-4">My Projects</h2>
            <Row>
                {projectData.map((project, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;