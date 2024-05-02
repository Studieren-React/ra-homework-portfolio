import './Toolbar.css';
import { FilterType } from '../../types';
import { ToolbarFilter } from '../ToolbarFilter';

interface ToolbarProps {
  filters: FilterType[];
  selectedFilter: FilterType;
  handleSelectedFilter: (filter: FilterType) => void;
}

export function Toolbar({
  filters,
  selectedFilter,
  handleSelectedFilter,
}: ToolbarProps) {
  return (
    <nav className="Toolbar">
      {filters!.map((filter: FilterType) => (
        <ToolbarFilter
          key={filter}
          filter={filter}
          selectedFilter={selectedFilter}
          handleSelectedFilter={handleSelectedFilter}
        />
      ))}
    </nav>
  );
}
