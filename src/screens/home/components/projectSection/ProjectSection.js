import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ProjectSection.css';
import { Badge, FormControl, InputGroup, Button } from 'react-bootstrap';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
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
                setUniqueTags([...new Set(tags)]);
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
    };

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const handleShowAll = () => {
        setVisibleProjects(filteredProjects.length);
    };

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center mb-4'>Projects</h1>
            <div className='projectSection-subtitle'>
                <p className='text-center mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales at leo a porta. Suspendisse porta tellus lectus, iaculis vestibulum elit hendrerit ut...</p>
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
                {uniqueTags.map((tag, index) => (
                    <Badge
                        key={index}
                        className={`mr-2 ${selectedTags.includes(tag) ? "badge-selected" : "badge-unselected"}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className='row justify-content-center w-100'>
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                    <div
                    className={`mb-4 ${index < 2 ? 'col-lg-6 col-md-12 larger-project' : 'col-lg-4 col-md-6 col-sm-12'}`}
                    key={index}
                    >
                    <div className='project-card-wrapper'>
                        <ProjectCard project={project} />
                    </div>
                    </div>
                ))}
                </div>
            <div className='d-flex justify-content-between w-100'>
                {visibleProjects < filteredProjects.length && (
                    <Button onClick={handleShowMore} variant="primary">
                        Show More
                    </Button>
                )}
                {visibleProjects < filteredProjects.length && (
                    <Button onClick={handleShowAll} variant="secondary">
                        Show All
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectSection;