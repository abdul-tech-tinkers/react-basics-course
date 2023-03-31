# installation
use `vite@latest` to setup react native app with `TypeScript`

``` node.js
npm create vite@latest
```
- React is a javascript library for creating user interface
- `library` is a tool that provide specific functionality
- while a `framework` is a set of tools and guidelines for building application
- e.g. tool and toolset
- **react** is a tool for building user interface the only thing it does creating dynamic and interactive user interfaces

## Getting Started 
 - React is a JavaScript library for building dynamic and interactive user interfaces.
 - In React applications, we don’t query and update the DOM. Instead, we describe our application using small, reusable **components**. React will take care of efficiently creating and updating DOM elements.
    
 -  React components can be created using a function or a class. `Function-based components` are the preferred approach as they’re more concise and easier to work with.
 -  JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.•When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.
- When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM. 
- In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.
- Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc

## Buidling Components

```js
npm i bootstrap@5.2.3
```
Navigate to Main.tsx and import bootstrap css
```js
import "bootstrap/dist/css/bootstrap.css";
```

`Props` - imput passed to a component - like args - immutable - causes a rerender

`State` - Data Managed by a component - mutable - causes a rerender

```ts
color?: "primary" | "secondary" | "danger"; //allowable values

```

- In React apps, a **component** can only return a single element. To return multiple elements, we wrap them in a `fragment`, which is represented by empty angle brackets.
  ```js
      <>
      <h1>{heading}</h1>
      <div></div>
      </>
  ```
  
- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number. 
- To conditionally render content, we can use an ‘if’ statement or a ternary operator. 
  
```js
     {isShowAlert && (
        <Alerts onClose={() => showAlert(false)}>
          My <b>Alert</b>
        </Alerts>
      )}
```
- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React. 
- Components can optionally have props (short for properties) to accept input. 
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
- We should treat props as immutable (read-only) and not modify them. 
- When the state or props of a component change, React will re-render the component and update the DOM accordingly. 
- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.•To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number. 
- To conditionally render content, we can use an ‘if’ statement or a ternary operator. -We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React. 
- Components can optionally have props (short for properties) to accept input. 
- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
- We should treat props as immutable (read-only) and not modify them. 
- When the state or props of a component change, React will re-render the component and update the DOM accordingly. 


## Popular UI Libraries

There are several UI libraries available that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more.

- Bootstrap
- Material UI
- Tailwind CSS
- daisy UI simillar to bootstrap
  - `Chakra UI` simillar to material ui but built on top of tailwind 
    - it has prebuilt components develop on top of components
    - react `component library` built on top of `tailwind`
  
## Icons
 - react icons

```js
npm i react-icons@4.7.1
```

```js
import { BsFillCalendarFill } from "react-icons/bs";

<BsFillCalendarFill color="red" size="100" />
```

# State Management
- react update state asynchronously - to avoid unnecassary renders
- state is stored outside of the component
- use the hooks at the top level of the component.
- keep ur component `pure`. Render same output for given input props.
- state objects to be treated as immutable and read only, create new object and then set it.
- **Rule of Thumb:** A Component that holds the state should be responsible for updating the state, not by child component.
- state object are immutable dont update them in the component, always use the hook paramter set[Name] e.g. `setIsLoading(true)`

Update state of array of object or object with draft
```js
npm i immer@9.0.19
```


- The state hook allows us to add state to function components. 
  
- Hooks can only be called at the top level of components. 
- State variables, unlike local variables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when it is removed from the screen.
- React updates state in an asynchronous manner, so updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component. •Group related state variables into an object to keep them organized. 
- Avoid deeply nested state objects as they can be hard to update and maintain. 
- To keep state as minimal as possible, avoid redundant state variables that can be computed from existing variables. 
- A pure function is one that always returns the same result given the same input. Pure functions should not modify objects outside of the function.
- React expects our function components to be **pure**. A **pure** component should always return the same JSX given the same input. 
To keep our components pure, we should avoid making changes during the render phase. 
- Strict mode helps us catch potential problems such as impure components. Starting from React 18, it is enabled by default. It renders our components twice in development mode to detect any potential side effects. 
When updating objects or arrays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays to update the state.
- Immer is a library that can help us update objects and arrays in a more concise and mutable way. 
To share state between components, we should lift the state up to the closest parent component and pass it down as props to child components. 
- The component that holds some state should be the one that updates it. If a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop

# Forms

- `React Hook Forms`
- `Zod` - Data Validation

```js
npm i react-hook-form@7.43
npm i zod@3.20.6
```

integrate react hook form with zod
```js
npm i @hookform/resolvers@2.9.11
```

e.g [Sample Form](src/components/Form.tsx)