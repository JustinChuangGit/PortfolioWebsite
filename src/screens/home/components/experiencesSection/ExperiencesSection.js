import React from 'react';
import './ExperienceSection.css';

const experiences = {
  work: [
    {
      title: "Research & Development Summer Coop Student",
      company: "Saferoads Engineering",
      duration: "April 2020 – August 2022",
      bulletPoints: [
        "Contributed to the design and development of roadside safety products that save lives across the world",
        "Conducted 45+ full-scale crash tests to collect data and test the effectiveness of various roadside safety products",
        "Designed mechatronic devices, equipped with PCBs designed in Eagle, housings/fixtures designed in Solidworks, and powered by various types of microcontrollers, to safely and successfully conduct crash tests and record critical data",
        "Developed software using Flutter for the front end and Python (Flask RESTful APIs) for the back end, to reduce the crash test data retrieval and processing time by about 90%",
      ],
    },
    {
      title: "Team Captain",
      company: "Western Baja SAE",
      duration: "Jun 2018 - Dec 2019",
      bulletPoints: [
        "Led the complete redesign, development, and manufacturing of Western Baja SAE’s first fully custom gearbox, first electronic continuously variable transmission, and first four-wheel drive car",
        "Developed corporate sponsor relationships with major companies like Red Bull, Gene Haas, and Magna, increasing revenues by 114% (to $83k) in eight months",
        "Increased team membership by over 86% (to 83) from the previous year",
        "Facilitated change by actively providing opportunities to women in engineering increasing team gender diversity from 7% to 23%",
        "Elected Project Fund Delegate by all Western Engineering teams to help distribute over $180k in funding to enable experiential learning for all Western Engineering students",
        "Acted as Team Welder for the 21’/22’ season",
      ],
    },
  ],
  volunteer: [
    {
      title: "Founder",
      company: "Impact Everyone",
      duration: "September 2022 – June 2023",
      bulletPoints: [
        "Donated over $20k to animal sanctuaries, homeless shelters, charities, people in need and more",
        "Led a team of nine people to achieve break-even in the first eight months",
        "Developed partnerships with major brands, such as The Keg Steakhouse Bar and Grill, Food Basics, Home Hardware, United Canada, One Tree Planted and more",
        "Developed business relationships with manufacturers in various parts of Asia",
      ],
    },
  ],
  education: [
    {
      title: "BSc in Computer Science",
      institution: "University of Somewhere",
      duration: "2015 - 2019",
      bulletPoints: [
        "Focused on software development and algorithms.",
        "Completed a capstone project on machine learning.",
        "Received the Dean's List award for academic excellence.",
      ],
    },
  ],
};

const ExperiencesSection = () => {
  return (
    <div className="container experiences-section">
      <h2 className="text-center mb-4">Experience</h2>

      <h3 className="text-center mb-3">Work Experience</h3>
      {experiences.work.map((experience, index) => (
        <div key={index} className="experience-card mb-3">
          <h4>{experience.title}</h4>
          <h5>{experience.company}</h5>
          <h6>{experience.duration}</h6>
          <ul>
            {experience.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="text-center mb-3">Volunteer Experience</h3>
      {experiences.volunteer.map((experience, index) => (
        <div key={index} className="experience-card mb-3">
          <h4>{experience.title}</h4>
          <h5>{experience.company}</h5>
          <h6>{experience.duration}</h6>
          <ul>
            {experience.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="text-center mb-3">Educational Experience</h3>
      {experiences.education.map((experience, index) => (
        <div key={index} className="experience-card mb-3">
          <h4>{experience.title}</h4>
          <h5>{experience.institution}</h5>
          <h6>{experience.duration}</h6>
          <ul>
            {experience.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesSection;