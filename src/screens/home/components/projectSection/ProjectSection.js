import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ProjectSection.css';
import { Badge } from 'react-bootstrap';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectCollection = collection(db, 'projectList');
                const projectSnapshot = await getDocs(projectCollection);
                const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Fetched projects:", projectList);
                setProjects(projectList);
                setFilteredProjects(projectList);

                // Collect all unique tags
                const tags = projectList.flatMap(project => project.Tags || []);
                setUniqueTags([...new Set(tags)]);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        if (tag) {
            setFilteredProjects(projects.filter(project => project.Tags && project.Tags.includes(tag)));
        } else {
            setFilteredProjects(projects);
        }
    };

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center mb-4'>Project Section</h1>
            <div className="mb-4">
                <h5>Filter by Tags:</h5>
                <Badge
                    variant="secondary"
                    className="mr-2"
                    onClick={() => handleTagClick(null)}
                    style={{ cursor: 'pointer' }}
                >
                    All
                </Badge>
                {uniqueTags.map((tag, index) => (
                    <Badge
                        key={index}
                        variant="primary"
                        className="mr-2"
                        onClick={() => handleTagClick(tag)}
                        style={{ cursor: 'pointer' }}
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className='row justify-content-center w-100'>
                {filteredProjects.map((project, index) => (
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