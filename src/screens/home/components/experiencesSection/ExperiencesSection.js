import React from 'react';
import { Container } from 'react-bootstrap';
import ExpandableSection from './ExpandableSection'; // Adjust the import path accordingly

const ExperiencesSection = () => {
  return (
    <Container>
      <h2>Educational Experience</h2>
      <ExpandableSection
        title="Master of Electrical and Computer Engineering"
        location="Robotics and Control, Western University"
        years="2023 - Current"
      >
        {/* Add any additional information here if needed */}
      </ExpandableSection>

      <ExpandableSection
        title="Bachelor of Engineering"
        location="Mechatronic Systems Engineering, Western University"
        years="2019 - 2023"
      >
        {/* Add any additional information here if needed */}
      </ExpandableSection>

      <h2>Volunteer Experience</h2>
      <ExpandableSection
        title="Founder"
        location="Impact Everyone"
        years="September 2022 - June 2023"
      >
        <ul>
          <li>Donated over $20k to animal sanctuaries, homeless shelters, charities, people in need and more.</li>
          <li>Led a team of nine people to achieve break-even in the first eight months.</li>
          <li>Developed partnerships with major brands, such as The Keg Steakhouse Bar and Grill, Food Basics, Home Hardware, United Canada, One Tree Planted, and more.</li>
          <li>Developed business relationships with manufacturers in various parts of Asia.</li>
        </ul>
      </ExpandableSection>

      <h2>Work Experience</h2>
      <ExpandableSection
        title="Team Captain"
        location="Western Baja SAE"
        years="Jun 2018 - Dec 2019"
      >
        {/* Add any additional information here if needed */}
      </ExpandableSection>

      <ExpandableSection
        title="Research & Development Summer Coop Student"
        location="SafeRoads Engineering"
        years="April 2020 - August 2022"
      >
        {/* Add any additional information here if needed */}
      </ExpandableSection>
    </Container>
  );
};

export default ExperiencesSection;
