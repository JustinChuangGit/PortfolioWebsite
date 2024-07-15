import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ProjectSection.css';
import { Badge, FormControl, InputGroup, Button } from 'react-bootstrap';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleProjects, setVisibleProjects] = useState(3);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectCollection = collection(db, 'projectList');
                const projectSnapshot = await getDocs(projectCollection);
                const projectList = projectSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    Priority: doc.data().Priority ? Number(doc.data().Priority) : null
                }));

                console.log("Fetched projects:", projectList);
                
                // Sort projects by priority (highest first), with undefined priorities last
                const sortedProjects = projectList.sort((a, b) => {
                    if (a.Priority === null) return 1;
                    if (b.Priority === null) return -1;
                    return b.Priority - a.Priority;
                });

                setProjects(sortedProjects);
                setFilteredProjects(sortedProjects);

                // Collect all unique tags
                const tags = projectList.flatMap(project => project.Tags || []);
                setAvailableTags([...new Set(tags)]);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        const updateVisibleProjects = () => {
            if (window.innerWidth <= 576) { // Small screen size
                setVisibleProjects(3);
            } else { // Larger screens
                setVisibleProjects(5);
            }
        };

        updateVisibleProjects();
        window.addEventListener('resize', updateVisibleProjects);
        return () => window.removeEventListener('resize', updateVisibleProjects);
    }, []);

    const handleTagClick = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(updatedTags);
        filterProjects(searchQuery, updatedTags);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterProjects(query, selectedTags);
    };

    const filterProjects = (query, tags) => {
        let filtered = projects;

        if (query) {
            filtered = filtered.filter(project =>
                (project.ProjectName && project.ProjectName.toLowerCase().includes(query)) ||
                (project.Tags && project.Tags.some(tag => tag.toLowerCase().includes(query)))
            );
        }

        if (tags.length > 0) {
            filtered = filtered.filter(project =>
                project.Tags && tags.every(t => project.Tags.includes(t))
            );
        }

        setFilteredProjects(filtered);

        // Update available tags based on filtered projects
        const newAvailableTags = filtered.flatMap(project => project.Tags || []);
        setAvailableTags([...new Set(newAvailableTags)]);
    };

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const handleShowAll = () => {
        setVisibleProjects(filteredProjects.length);
    };

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center mb-4 title'>Projects</h1>
            <div className='projectSection-subtitle'>
                <p className='text-center mb-4'>Below is a showcase of some of the exciting projects I've worked on over the past few years.
                </p>
            </div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search projects..."
                    aria-label="Search projects"
                    aria-describedby="basic-addon2"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </InputGroup>
            <div className="mb-4">
                <h5 className='mb-3'>Filter by Tags:</h5>
                {availableTags.map((tag, index) => (
                    <Badge
                        key={index}
                        className={`mr-2 ${selectedTags.includes(tag) ? "badge-selected" : "badge-unselected"}`}
                        onClick={() => handleTagClick(tag)}
                        style={{ cursor: 'pointer' }}
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className='row project-row justify-content-center w-100'>
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                    <div
                        className={`mb-4 ${index < 2 ? 'col-lg-6 col-md-12 larger-project' : 'col-lg-4 col-md-6 col-sm-12'} d-flex`}
                        key={index}
                    >
                        <div className='project-card-wrapper h-100 d-flex flex-column'>
                            <ProjectCard project={project} index={index}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-between w-100 px-3'>
                {visibleProjects < filteredProjects.length && (
                    <Button onClick={handleShowMore} variant="secondary" className='more-button'>
                        Show More
                    </Button>
                )}
                {visibleProjects < filteredProjects.length && (
                    <Button onClick={handleShowAll} variant="secondary" className='all-button'>
                        Show All
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectSection;
