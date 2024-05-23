import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import {collection, getDocs} from 'firebase/firestore';
import './ProjectSection.css';



const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

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

    return (
        <div className='container'>
            <h1 className='text-center mb-4'>Project Section</h1>
            <div className='row'>
                {projects.map((project, index) => (
                    <div
                        className='col-lg-4 col-md-6 col-sm-12 mb-4'
                        key={index}
                    >
                        <div className='project-card-wrapper'>
                            <ProjectCard project={project} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;