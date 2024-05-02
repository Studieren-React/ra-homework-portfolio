import './ToolbarFilter.css';
import { FilterType } from '../../types';

interface ToolbarFilterProps {
  filter: FilterType;
  selectedFilter: FilterType;
  handleSelectedFilter: (filter: FilterType) => void;
}

export function ToolbarFilter({
  filter,
  selectedFilter,
  handleSelectedFilter,
}: ToolbarFilterProps) {
  return (
    <button
      className={
        filter !== selectedFilter ? 'ToolbarFilter' : 'ToolbarFilterActive'
      }
      onClick={() => handleSelectedFilter(filter)}
    >
      {filter}
    </button>
  );
}
