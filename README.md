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
