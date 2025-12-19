# React Task Management Dashboard
A Task Management Dashboard built with React and TypeScript that allows users to create, view, filter, search, sort, and manage tasks. Tasks are persisted using localStorage, providing a simple simulation of backend data storage.



## Features
- Create, update, and delete tasks
- Filter tasks by status and priority
- Search tasks by title
- Sort tasks by creation date
- Form validation with user feedback
- Task statistics (total and completed tasks)
- Data persistence using localStorage
- Fully typed with TypeScript


## Technologies Used
- React
- TypeScript
- Vite
- HTML & CSS
- Browser Local Storage API


## Reflection

### How I Implemented React and TypeScript Features
In this project, I used React functional components combined with TypeScript to build a modular and type-safe task management dashboard. TypeScript interfaces were created to define the structure of tasks, form data, and filter options. 

React hooks such as useState and useEffect were used extensively for state management and side effects. useState was used to manage tasks, filters, and form data, while useEffect handled loading and saving tasks to localStorage. 

### Challenges Encountered and How I Overcame Them
One of the main challenges was managing state across multiple components while keeping the application organized. To overcome this, I centralized the main task state in the Dashboard component and passed data and handler functions down through props. 

### Approach to Component Composition and State Management
Smaller components such as TaskItem handle individual task behavior, while higher-level components like TaskList and Dashboard manage data flow and state.
The Dashboard component acted as the central hub. This allowed for easier debugging and predictable updates. Derived state, such as filtered and sorted tasks or task statistics, was computed rather than stored, reducing redundancy.










