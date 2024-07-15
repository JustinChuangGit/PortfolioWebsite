import React from 'react';
import { Container } from 'react-bootstrap';
import ExpandableSection from './ExpandableSection'; // Adjust the import path accordingly
import MediaSlider from './MediaSlider'; // Adjust the import path accordingly
import './ExperiencesSection.css'; // Import the new CSS file

const ExperiencesSection = () => {
  return (
    <Container>
      <h1 className='mt-5 mb-5 title'>Experiences</h1>
      <div className="header-container">
        <h3 className="bordered-header">Educational Experience</h3>
        <hr />
      </div>
      <ExpandableSection
        title="Master of Engineering - Robotics and Control"
        location="Western University"
        years="2023 - Current"
      >
        <div className="flex-container">
          <h5>Relevant Courses: </h5>
          <ul>
            <li>ECE4460 - Real Time & Embedded Systems</li>
            <li>ECE4469 - Applied Control Systems</li>
            <li>MSE4401 - Robotic Manipulators</li>
          </ul>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="Bachelor of Engineering - Mechatronic Systems"
        location="Western University"
        years="2019 - 2023"
      >
        <div className="flex-container">
        <h5>Relevant Courses: </h5>

          <ul>
            <li>ECE9039 - Machine Learning</li>
            <li>ECE9047 - Sensor Networks & Embedded Systems</li>
            <li>ECE9069 - Hacking</li>
            <li>ECE9156 - Autonomous Robotics</li>
            <li>ECE9021 - Image Processing</li>
            <li>ECE9031 - Advanced Digital Signal Processing</li>
            <li>ECE9014 - Data Management & application</li>
          </ul>
        </div>
      </ExpandableSection>

      <div className="header-container">
        <h3 className="bordered-header">Volunteer Experience</h3>
        <hr />
      </div>
      <ExpandableSection
        title="Founder"
        location="Impact Everyone"
        years="2020 - 2022"
      >
        <p>We sell reusable water bottles and partner with companies like The Keg, Home Hardware, One Tree Planted and more, to donate money and supplies to charitable initiatives that need it most. Let’s make an impact together!</p>
        <div className="flex-container">
          <ul>
            <li>Donated over $20k to animal sanctuaries, homeless shelters, charities, people in need and more</li>
            <li>Led a team of nine people to achieve break-even in the first eight months</li>
            <li>Developed partnerships with major brands, such as The Keg Steakhouse Bar and Grill, Food Basics, Home Hardware, United Canada, One Tree Planted and more</li>
            <li>Developed business relationships with manufacturers in various parts of Asia</li>
          </ul>
          <div className='media'>
            <MediaSlider folder="Experiences/Impact" />
          </div>
        </div>
      </ExpandableSection>

      <div className="header-container">
        <h3 className="bordered-header">Work Experience</h3>
        <hr />
      </div>
      <ExpandableSection
        title="Team Captain"
        location="Western Baja SAE"
        years="2022 - 2023"
      >
        <p>Western Baja SAE is an engineering team that designs and manufactures an off-road vehicle. We compete with teams all across the world and provide students with an experiential learning experience that cannot be achieved in a classroom.</p>
        <div className="flex-container">
          <ul>
            <li>Leading the development and manufacturing of Western Baja SAE’s first fully custom gearbox, first electronic continuously variable transmission, and first four-wheel drive car</li>
            <li>Developed corporate sponsor relationships with major companies like Red Bull, Gene Haas, and Magna, increasing revenues by 114% (to $83k) in eight months</li>
            <li>Increased team membership by over 84% (to 83) from the previous year</li>
            <li>Facilitated change by actively providing opportunities to women in engineering increasing team gender diversity from 7% to 23%</li>
            <li>Elected Project Fund Delegate by all Western Engineering Teams to help distribute over $180k in funding to enable experiential learning for all clubs and teams within the faculty</li>
          </ul>
          <div className='media'>
            <MediaSlider folder="Experiences/Baja" />
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="Research & Development Summer Coop Student"
        location="SafeRoads Engineering"
        years="2020 - 2022"
      >
        <p>Working to make roads safer by crash testing roadside safety products and developing new safety products. </p>
        <div className="flex-container">
          <ul>
            <li>Collaborated with industry experts to develop creative roadside safety products that save lives worldwide</li>
            <li>Conducted 45+ full scale crash tests to collect data and test the effectiveness of various roadside safety products</li>
            <li>Worked with the Ontario Provincial Police to help facilitate and provide expert advice with forensic crash testing</li>
            <li>Prepared and instrumented crash vehicles with highly technical equipment</li>
            <li>Developed mechatronic systems to safely and successfully conduct crash tests</li>
            <li>Developed software with Flutter and Python to reduce the crash test data retrieval and processing time by about 90%</li>
          </ul>
          <div className='media'>
            <MediaSlider folder="Experiences/Saferoads" />
          </div>
        </div>
      </ExpandableSection>
    </Container>
  );
};

export default ExperiencesSection;
