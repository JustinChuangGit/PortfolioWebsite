// ProjectCard.js
import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import Slider from 'react-slick';

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Card style={{ width: '24rem' }} onClick={handleShow}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Click to see more information.
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='p-5'>
                <h1>Project Name</h1>
                <Slider {...settings}>
                    <div>
                    <img src="https://via.placeholder.com/800x400" alt="Placeholder 1" style={{ width: '100%' }} />
                    </div>
                    <div>
                    <img src="https://via.placeholder.com/800x400" alt="Placeholder 2" style={{ width: '100%' }} />
                    </div>
                    <div>
                    <img src="https://via.placeholder.com/800x400" alt="Placeholder 3" style={{ width: '100%' }} />
                    </div>
                </Slider>  
            </div>         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;