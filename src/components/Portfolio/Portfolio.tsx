import { useEffect, useState } from 'react';
import './Portfolio.css';

import { Toolbar } from '../Toolbar';
import { FilterType } from '../../types';
import { ProjectList } from '../ProjectList/ProjectList.tsx';
import { filters, projects as initialProjects } from '../../assets';
import { ProjectItem } from '../../types/ProjectItem.interface.ts';

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(
    FilterType.All
  );
  const [filteredProjects, setFilteredProjects] = useState([
    ...initialProjects,
  ]);

  const handleSelectedFilter = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    setFilteredProjects(() =>
      selectedFilter === FilterType.All
        ? initialProjects
        : initialProjects.filter(
            (projectItem: ProjectItem) =>
              projectItem.category === selectedFilter
          )
    );
  }, [selectedFilter]);

  return (
    <div className="container mx-auto p-8">
      <Toolbar
        filters={filters}
        selectedFilter={selectedFilter}
        handleSelectedFilter={handleSelectedFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}
