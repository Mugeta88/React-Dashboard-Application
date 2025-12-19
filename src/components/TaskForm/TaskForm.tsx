import { useState } from "react";
import type { TaskFormData, Task } from "../../types";
import { validateTask } from "../../utils/taskUtils";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateTask(formData.title);
    if (validationError) {
      setError(validationError);
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: "todo",
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setFormData({ title: "", description: "", priority: "medium" });
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        name="title"
        placeholder="Task title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;