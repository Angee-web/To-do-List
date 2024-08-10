# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


The TodoList Component:
The TodoList component is a React functional component designed to manage and display a list of to-do items. It utilizes state management and passes data and functions to child components for further interaction. Here’s a breakdown of how it works:

Imports:
* useState: A React hook used to manage the state of the to-do list.
* TodoListHeader: A child component presumably used for adding new to-do items.
* TodoListBody: A child component responsible for displaying the list of to-do items and providing delete functionality.

Component Logic
- State Management:
todoData: State variable holding an array of to-do items.
setTodoData: Function to update the todoData state.

- Handle Delete Function:
handleDelete: Function to delete a to-do item by its index.
Parameters: i (index of the item to be deleted).
Logic:
Creates a copy of todoData using the spread operator.
Filters out the item at index i.
Updates the todoData state with the new list, excluding the deleted item.

- Rendering:
Wrapper div: Contains the entire to-do list component with the class name todoList.
TodoListHeader:
Receives setTodoData as a prop, likely to allow the header component to add new to-do items to the list.
TodoListBody:
Receives todoData and handleDelete as props.
todoData: Passes the current list of to-dos to be displayed.
handleDelete: Passes the delete function to allow items to be removed.


TodoListBody component:
The TodoListBody component is a React functional component that renders the body of a to-do list. It displays each to-do item with its details and provides a way to delete individual items. Here's a detailed breakdown of the component:

Imports
* MdDelete: An icon component from react-icons used to represent the delete action.

TypeScript Interface
* TodoListBodyProps: TypeScript interface defining the props for the TodoListBody component.
* todoData: An array of to-do items (of type any[], though a more specific type is recommended for better type safety).
* handleDelete: A function to handle the deletion of a to-do item.

Component Definition
Mapping Through todoData:
* todoData?.map: Iterates over the todoData array (using optional chaining ?. to handle cases where todoData might be undefined or null).
* data: Represents each individual to-do item.
* i: Index of the current item, used as a key for each div.

Rendering To-Do Items:
* Title and Time: Displays the title and time associated with each to-do item.
* Status Dropdown:
A dropdown allowing the user to select the status of the to-do item.
defaultValue is set to the current status of the to-do item.
* Creation Date:
Displays the creation date of the to-do item formatted as a locale string.
* Delete Button:
MdDelete: Renders a delete icon.
color="red": Sets the color of the delete icon.
onClick={() => handleDelete(i)}: Calls handleDelete with the index of the to-do item to be deleted when clicked.


TodoListHeader component:
The TodoListHeader component is a React functional component that allows users to add new to-do items to the list. It uses state management to handle user input and a callback function to update the list. Here’s a detailed explanation of how it works:

Imports
useState: A React hook used for managing the state of the input fields.

TypeScript Interface
* TodoListHeaderProps: TypeScript interface defining the props for the TodoListHeader component.
* setTodoData: A function to update the to-do list data. It takes a parameter of type any and returns void.

Component Definition
* TodoListHeader: Functional component receiving setTodoData as a prop.
* State Variables:
todoTitle: State variable to store the title of the to-do item.
todoTime: State variable to store the time associated with the to-do item.
setTodoTitle and setTodoTime: Functions to update the respective state variables.

Handle Submit Function
* handleSubmit: Function to create a new to-do item and update the list.
todo: An object representing the new to-do item with:
title: Title of the to-do item.
time: Time associated with the to-do item.
status: Default status set to "Created".
created_at: Timestamp of when the to-do item was created.
* setTodoData: Updates the to-do list by appending the new to-do item to the previous list.

JSX Render
* <input type="text">: placeholder: Displays a placeholder text prompting the user to type the title.
onChange: Updates todoTitle state when the user types into the input field.
* <input type="time">:
onChange: Updates todoTime state when the user selects a time.
* <button>: onClick: Calls handleSubmit when the button is clicked to add the new to-do item.

App.tsx
The App component sets up the main layout for your application using styled-components for styling and integrates the TodoList component.