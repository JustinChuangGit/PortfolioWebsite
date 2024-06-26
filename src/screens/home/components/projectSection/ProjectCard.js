import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../../services/firebase';
import './ProjectCard.css';

import { Badge } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        if (project.ThumbnailURL) {
          const thumbnailRef = ref(storage, project.ThumbnailURL);
          const url = await getDownloadURL(thumbnailRef);
          setThumbnailUrl(url);
        }

        if (project.Images) {
          const urls = await Promise.all(
            project.Images.map(async (imagePath) => {
              const imageRef = ref(storage, imagePath);
              return await getDownloadURL(imageRef);
            })
          );
          setImageUrls(urls);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, [project.ThumbnailURL, project.Images]);

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
      <Card className='project-card' style={{ width: '100%' }} onClick={handleShow} >
        <div className="card-img-ratio">
          <img src={thumbnailUrl || "https://via.placeholder.com/150"} alt={project.ProjectName} />
        </div>
        <Card.Body className='text-start'>
          <Card.Title>{project.ProjectName}</Card.Title>
          <Card.Text className='card-description'>
            {project.Description}
          </Card.Text>
          <div className='card-tags'>
            {project.Tags && project.Tags.map((tag, index) => (
              <Badge key={index} variant="primary" className="mr-1">{tag}</Badge>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" className='popup-content'>
        <Modal.Header closeButton>
          <Modal.Title>{project.ProjectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 popup-content'>
            <div className="slider-container">
              <Slider {...settings}>
                {imageUrls.map((url, index) => (
                  <div key={index}>
                    <img src={url || "https://via.placeholder.com/800x400"} alt={`${project.ProjectName} ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            {project.Heading && project.Paragraph && project.Heading.map((heading, index) => (
              <div key={index} className='mt-5'>
                <h5>{heading}</h5>
                <p>{project.Paragraph[index]}</p>
              </div>
            ))}
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