import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
    const projectCards = [1, 2, 3, 4, 5, 6]; // Example array, replace with your dynamic data

    return (
        <div className='container justify-content-center'>
            <h1 className='text-center mb-4'>Project Section</h1>
            <div className='row justify-content-center '>
                {projectCards.map((card, index) => (
                    <div
                        className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'
                        key={index} // key should ideally be a unique identifier from your data
                    >
                            <ProjectCard />
               
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProjectSection;