REACT FUNDAMENTALS - DETAILED POINTWISE SUMMARY

1.  React Fundamentals

-   React is a JavaScript library used for building user interfaces.
-   It is developed and maintained by Facebook.
-   Uses component-based architecture to create reusable UI blocks.
-   Uses Virtual DOM to improve performance.
-   Follows one-way data flow (parent to child).
-   UI automatically updates when state changes.

2.  JSX and Rendering

-   JSX stands for JavaScript XML.
-   It allows writing HTML-like syntax inside JavaScript.
-   JSX is compiled into React.createElement() calls.
-   JavaScript expressions can be used inside {}.
-   Must return a single parent element or fragment.
-   React renders JSX to the DOM using ReactDOM.

3.  Functional Components

-   Functional components are simple JavaScript functions.
-   They return JSX to display UI.
-   They are lightweight and easier to write.
-   Support React Hooks like useState and useEffect.
-   Preferred over class components in modern React.

4.  Props and State Props:

-   Props are inputs passed from parent to child components.
-   Props are read-only and cannot be modified.

State: - State stores internal data of a component. - Managed using
useState hook. - Updating state causes re-rendering. - Used for dynamic
and interactive UI.

5.  Handling Events

-   React events are similar to DOM events.
-   Event names use camelCase (onClick, onChange).
-   Event handlers are functions executed on user interaction.
-   Can prevent default behavior using e.preventDefault().

6.  Conditional Rendering

-   Used to display UI based on conditions.
-   Common methods include:
    -   if/else statements
    -   Ternary operator (? :)
    -   Logical AND (&&)
-   Helps show/hide elements dynamically.

7.  Lists and Keys

-   Lists are rendered using the map() method.
-   Each list item must have a unique key.
-   Keys help React identify which items changed.
-   Using stable unique IDs improves performance.
-   Avoid using index as key in dynamic lists.
---------------------------------------

Week 2 summary

1. useState

useState adds state to functional components.

const [state, setState] = useState(initialValue)

Key points:

• State persists between renders
• Updating state triggers re-render (if value changes)
• Use functional updates when depending on previous state:
setCount(prev => prev + 1)
• Do not mutate state directly — always return new objects/arrays

useState is for reactive UI data.

---

2. useEffect (Dependencies & Cleanup)

useEffect handles side effects like:

* API calls
* Timers
* Subscriptions
* DOM updates

useEffect(() => {
// effect
return () => {
// cleanup
}
}, [dependencies])

Dependency behavior:

• No array → runs every render
• [] → runs once on mount
• [a, b] → runs when a or b changes

Cleanup runs before re-running and on unmount.

Common mistakes:
• Missing dependencies
• Infinite loops
• Not cleaning up effects

useEffect syncs your component with the outside world.

---

3. useRef

useRef creates a persistent mutable object:

const ref = useRef(initialValue)

Key uses:

• Access DOM elements
• Store values that should NOT trigger re-renders

Changing ref.current does not re-render.

useRef = instance-like storage.

---

4. useMemo and useCallback

Both are performance optimizations.

useMemo → memoizes a computed value
useCallback → memoizes a function

They recompute only when dependencies change.

Used to:
• Prevent unnecessary recalculations
• Prevent unnecessary child re-renders

Do not overuse — only when needed.

---

5. Custom Hooks

Custom hooks extract reusable stateful logic.

Rules:
• Must start with “use”
• Can use other hooks
• Share logic, not state

Benefits:
• Cleaner components
• Reusable logic
• Better structure

Each usage gets its own state.

---

6. Context API

Context shares global data without prop drilling.

Used for:
• Auth
• Theme
• Language
• Global state

When context value changes, all consumers re-render.

Optimize by:
• Splitting contexts
• Memoizing provider values

---


useState → store UI state
useEffect → side effects
useRef → persistent mutable value
useMemo → memoized value
useCallback → memoized function
Custom hooks → reusable logic
Context → shared global state
-------------------------------------

WEEK 3 SUMMARY

1. React 18 Concurrent Features
React 18 introduced concurrent rendering, which allows React to work on multiple UI updates at the same time and prioritize more important updates. This improves application responsiveness and user experience. React can pause, interrupt, or restart rendering when needed.

Important features include:
- Automatic batching
- useTransition
- useDeferredValue

Example (useTransition):
const [isPending, startTransition] = useTransition();

function handleSearch(value) {
  startTransition(() => {
    setSearchQuery(value);
  });
}

Here React treats the update as low priority so the UI stays responsive.


2. Performance Optimization
Performance optimization focuses on improving application speed and reducing unnecessary re-renders. Techniques include memoization, lazy loading, efficient state management, and minimizing bundle size.

Example:
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);

This ensures the filtering logic only runs when the users list changes.


3. Memoization Strategies
Memoization is used to cache results of expensive calculations or prevent unnecessary component re-renders.

Common tools:
- React.memo
- useMemo
- useCallback

Example (React.memo):
const UserCard = React.memo(function UserCard({ name }) {
  return <h2>{name}</h2>;
});

The component only re-renders if the props change.


Example (useCallback):
const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);

This prevents the function from being recreated on every render.


4. Component Architecture Best Practices
Good component architecture helps build scalable and maintainable applications. Components should be small, reusable, and focused on a single responsibility. Logic should be separated from UI using custom hooks.

Example:

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

function Counter() {
  const { count, setCount } = useCounter();
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

Here the logic is reusable through a custom hook.


5. Error Boundaries
Error boundaries are React components that catch JavaScript errors in their child component tree during rendering. Instead of crashing the entire app, they display a fallback UI.

Example:

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Counter />
</ErrorBoundary>

Fallback component example:

function ErrorFallback({ error }) {
  return <h2>Something went wrong: {error.message}</h2>;
}


6. Code Splitting and Lazy Loading
Code splitting improves performance by splitting the application bundle into smaller chunks that load only when needed.

Example:

const Counter = React.lazy(() => import("./Counter"));

<Suspense fallback={<p>Loading...</p>}>
  <Counter />
</Suspense>

React loads the Counter component only when it is required, which reduces the initial bundle size and improves page load time.