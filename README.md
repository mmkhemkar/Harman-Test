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
