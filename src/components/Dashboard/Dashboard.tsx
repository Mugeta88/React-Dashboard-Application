import { useEffect, useState } from "react";
import type { Task, TaskFilterOptions } from "../../types";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import { filterTasks, sortTasksByDate } from "../../utils/taskUtils";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? (JSON.parse(saved) as Task[]) : [];
  });
  const [filters, setFilters] = useState<TaskFilterOptions>({
    status: "all",
    priority: "all",
    search: "",
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const updateTask = (updated: Task) =>
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));

  const deleteTask = (id: string) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const visibleTasks = sortTasksByDate(filterTasks(tasks, filters));

  const completedCount = tasks.filter((t) => t.status === "completed").length;

  return (
    <div>
      <h1>Task Dashboard</h1>
      <p>
        Total: {tasks.length} | Completed: {completedCount}
      </p>

      <TaskForm onAddTask={addTask} />
      <TaskFilter filters={filters} onChange={setFilters} />
      <TaskList
        tasks={visibleTasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default Dashboard;