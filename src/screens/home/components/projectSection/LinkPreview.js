import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './LinkPreview.css'; // Ensure to import the custom CSS

const LinkPreview = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewData, setPreviewData] = useState({ title: '', description: '', imageUrl: '' });

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(`https://api.linkpreview.net?key=7403742844b24206e1da7caa0b262c0e&q=${url}`);
        if (!response.ok) {
          throw new Error('Failed to fetch preview data');
        }
        const data = await response.json();
        setPreviewData({
          title: data.title,
          description: data.description,
          imageUrl: data.image,
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  if (loading) {
    return <p>Loading preview...</p>;
  }

  if (error) {
    return <p>Error loading preview</p>;
  }

  return (
    <Card className="link-preview-card">
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-preview-anchor">
        <div className="link-preview-content">
          {previewData.imageUrl && <img src={previewData.imageUrl} alt="Link preview" className="link-preview-image" />}
          <div className="link-preview-text">
            <Card.Title className="onest-font">{previewData.title}</Card.Title>
            <Card.Text className="onest-font">{previewData.description}</Card.Text>
            <Card.Text className="onest-font"><small className="text-muted">{url}</small></Card.Text>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default LinkPreview;
