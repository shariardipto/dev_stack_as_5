# DevStack Builder

A clean and interactive React app where users explore popular development technologies and build their own custom tech stack by selecting tools they want to use.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify

## Features

- Dynamic technology loading from a local JSON source (`public/technologies.json`) with loading and error states.
- Build-your-stack interaction: add technologies, prevent duplicates, remove single items, or clear all selections.
- Real-time UI feedback using toast notifications for add, duplicate, remove, and empty-state actions.

## React Questions (Short Answers)

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI directly inside JavaScript/TypeScript. React uses it to make component structure easier to read and connect UI with logic in one place.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and cause re-rendering.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates reactive state variables in function components. In this project, it is used in `App` for `technologies`, `selectedTechnologies`, `isLoading`, and `loadError`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch `technologies.json` when the app loads, so the data is loaded once and then stored in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React track each item efficiently during updates. Without stable keys, React can mix up items and re-render incorrectly.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI based on a condition. In `StackPanel`, when no technologies are selected, it shows the "Your stack is empty." message; otherwise it shows the selected items list.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent-to-child data is passed through props. Child-to-parent communication is done by passing a callback function from the parent; the child calls that function with data (for example, `onAdd` and `onRemove` in this project).

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
