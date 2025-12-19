import type { Task, TaskFilterOptions } from "../types";

export const filterTasks = (
  tasks: Task[],
  filters: TaskFilterOptions
): Task[] => {
  return tasks.filter((task) => {
    const statusMatch =
      filters.status === "all" || task.status === filters.status;
    const priorityMatch =
      filters.priority === "all" || task.priority === filters.priority;
    const searchMatch = task.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return statusMatch && priorityMatch && searchMatch;
  });
};

export const sortTasksByDate = (tasks: Task[]): Task[] => {
  return [...tasks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const validateTask = (title: string): string | null => {
  if (!title.trim()) return "Title is required";
  if (title.length < 3) return "Title must be at least 3 characters";
  return null;
};

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString();