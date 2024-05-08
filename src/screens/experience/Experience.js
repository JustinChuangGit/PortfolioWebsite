import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'ABC Company',
            position: 'Software Engineer',
            duration: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna euismod, tincidunt nunc id, aliquet nisl. Nulla facilisi. Nullam id nunc auctor, aliquam nunc id, aliquam nunc. Sed vitae urna euismod, tincidunt nunc id, aliquet nisl. Nulla facilisi. Nullam id nunc auctor, aliquam nunc id, aliquam nunc.',
        },
        {
            company: 'XYZ Corporation',
            position: 'Frontend Developer',
            duration: '2016 - 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna euismod, tincidunt nunc id, aliquet nisl. Nulla facilisi. Nullam id nunc auctor, aliquam nunc id, aliquam nunc. Sed vitae urna euismod, tincidunt nunc id, aliquet nisl. Nulla facilisi. Nullam id nunc auctor, aliquam nunc id, aliquam nunc.',
        },
    ];

    return (
        <div>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <h3>{experience.company}</h3>
                    <p>{experience.position}</p>
                    <p>{experience.duration}</p>
                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;