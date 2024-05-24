import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../../services/firebase';

const ProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        if (project.ThumbnailURL) {
          const imageRef = ref(storage, project.ThumbnailURL);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        }
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, [project.ImageUrl]);

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
      <Card style={{ width: '100%' }} onClick={handleShow}>
        <div className="card-img-ratio">
          <img src={imageUrl || "https://via.placeholder.com/150"} alt={project.ProjectName} />
        </div>
        <Card.Body>
          <Card.Title>{project.ProjectName}</Card.Title>
          <Card.Text>
            {project.Text_1}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.ProjectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-5'>
            <h1>{project.ProjectName}</h1>
            {/* <Slider {...settings}>
              <div>
                <img src={imageUrl || "https://via.placeholder.com/800x400"} alt={project.ProjectName} style={{ width: '100%' }} />
              </div>
            </Slider> */}
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