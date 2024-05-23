import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import {collection, getDocs} from 'firebase/firestore';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectCollection = collection(db, 'projectList'); // Correct collection name
                const projectSnapshot = await getDocs(projectCollection);
                const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Fetched projects:", projectList); // Print fetched data to the console
                setProjects(projectList);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <div className='container'>
            <h1 className='text-center mb-4'>Project Section</h1>
            <div className='row justify-content-center'>
                {projects.map((project, index) => (
                    <div
                        className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
                        key={index}
                    >
                        <div className='d-flex justify-content-center'>
                            <div className='w-100 mx-sm-2 mx-0'>
                                <ProjectCard project={project} onClick={() => handleCardClick(project)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className='popup'>
                    <div className='popup-inner'>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectSection;