import type { Task } from "../../types";
import { formatDate } from "../../utils/taskUtils";

interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onUpdate, onDelete }: TaskItemProps) => {
  const toggleStatus = () => {
    const newStatus =
      task.status === "completed" ? "todo" : "completed";
    onUpdate({ ...task, status: newStatus });
  };

  return (
    <li>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Created: {formatDate(task.createdAt)}</p>

      <button onClick={toggleStatus}>Toggle Status</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;