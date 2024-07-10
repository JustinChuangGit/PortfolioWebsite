import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../services/firebase.js'; // Adjust the import path accordingly
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MediaSlider.css'; // Import the new CSS file

const MediaSlider = ({ folder }) => {
  const [mediaUrls, setMediaUrls] = useState([]);

  useEffect(() => {
    const fetchMediaUrls = async () => {
      try {
        const folderRef = ref(storage, folder);
        const result = await listAll(folderRef);
        const urls = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            console.log(`Fetched URL: ${url}`); // Debug log
            return url;
          })
        );
        setMediaUrls(urls);
      } catch (error) {
        console.error("Error fetching media URLs:", error);
      }
    };

    console.log(`Fetching media from folder: ${folder}`); // Debug log
    fetchMediaUrls();
  }, [folder]);

  const getFileExtension = (url) => {
    const path = url.split('?')[0]; // Remove query parameters
    return path.split('.').pop().toLowerCase();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {mediaUrls.map((url, index) => {
        const extension = getFileExtension(url);
        return (
          <div key={index} className="media-container">
            {['jpeg', 'jpg', 'gif', 'png', 'bmp', 'svg'].includes(extension) ? (
              <img src={url} alt={`media-${index}`} className="media-item" />
            ) : ['mp4', 'webm', 'ogv'].includes(extension) ? (
              <video controls className="media-item">
                <source src={url} type={`video/${extension}`} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Unsupported file type: {url}</p>
            )}
          </div>
        );
      })}
    </Slider>
  );
};

export default MediaSlider;
