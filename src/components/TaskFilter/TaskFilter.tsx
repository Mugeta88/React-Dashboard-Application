import type { TaskFilterOptions } from "../../types";

interface TaskFilterProps {
  filters: TaskFilterOptions;
  onChange: (filters: TaskFilterOptions) => void;
}

const TaskFilter = ({ filters, onChange }: TaskFilterProps) => {
  return (
    <div>
      <select
        value={filters.status}
        onChange={(e) =>
          onChange({ ...filters, status: e.target.value as any })
        }
      >
        <option value="all">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={filters.priority}
        onChange={(e) =>
          onChange({ ...filters, priority: e.target.value as any })
        }
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        placeholder="Search tasks"
        value={filters.search}
        onChange={(e) =>
          onChange({ ...filters, search: e.target.value })
        }
      />
    </div>
  );
};

export default TaskFilter;