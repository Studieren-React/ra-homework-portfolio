import './ProjectList.css';
import { ProjectItem } from '../../types/ProjectItem.interface.ts';
import { ProjectListItem } from '../ProjectListItem';

interface ProjectListProps {
  projects?: ProjectItem[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="ProjectList">
      {projects!.map((project: ProjectItem, index: number) => (
        <ProjectListItem
          key={`${project.img}-${project.category}-${index}`}
          project={project}
        />
      ))}
    </div>
  );
}
