import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { db } from '../../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ProjectSection.css';
import { Badge, FormControl, InputGroup } from 'react-bootstrap';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center mb-4'>Project Section</h1>
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
                <h5>Filter by Tags:</h5>
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