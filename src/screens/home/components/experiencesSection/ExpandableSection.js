import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import './ExpandableSection.css';

const ExpandableSection = ({ title, location, years, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3" style={{ border: 'none' }}>
      <div className="expandable-section" onClick={() => setOpen(!open)}>
        <div className="section-header">
          <div className="section-title-container">
            <div className="section-title text-start">{title}</div>
            <div className="section-location text-start">{location}</div>
          </div>
          <div className="section-years">{years}</div>
        </div>
      </div>
      <Collapse in={open}>
        <div id="collapse-content" className="collapse-content">
          <Card.Body>
            {children}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExpandableSection;
