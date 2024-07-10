import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import './ExpandableSection.css';

const ExpandableSection = ({ title, location, years, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3" style={{ border: 'none' }}>
      <div className="expandable-section" onClick={() => setOpen(!open)}>
        <div className="section-header">
          <div className="section-title-container text-start">
            <div className="section-title">{title}</div>
            <div className="section-location">{location}</div>
          </div>
          <div className="section-years">
            {years}
            <span className="material-symbols-outlined">{open ? 'remove_circle' : 'add_circle'}</span>
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div id="collapse-content" className="collapse-content">
          <Card.Body className=''>
            {children}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ExpandableSection;
