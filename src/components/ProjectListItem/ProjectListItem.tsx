import './ProjectListItem.css';
import { ProjectItem } from '../../types/ProjectItem.interface.ts';

interface ProjectListItemProps {
  project?: ProjectItem;
}

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <figure className="ProjectListItem">
      <img
        className="ProjectListItemImage"
        src={project?.img}
        alt={project?.category}
      />
    </figure>
  );
}
