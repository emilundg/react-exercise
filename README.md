# React exercise todo
1. Start by examining the project structure and see what files exist and what they contain.
2. What type of component is MainContent aka, functional or class?

## Basic functionality aka MVP
1. A good way to start implementing a huge beast like a todo-list is to have simple functionality aka an MVP. This is done by 
   1. Adding a button to render function
   2. Adding a onClick function to button which executes addTodo(item) function
   3. Reading from our state which currently only contains todoList

### Adding a button to render function
1. Somewhere inside 
```html
    <div className="MainContent"> ... </div>
``` 

add:
```html
    <button>En bra knapp text</button>
```

Verify the output by saving the file and see if your nice new button has been rendered. Hopefully great!

2. Now we want to execute a function from our button. In order to capture the event from the user we can use the "onClick" event handler. Extend your nice button with this:
```js
<button onClick={() => addTodo("ITEM")}> ....
``` 

If you now go to the webapp and open the console, everytime you press the button 'ITEM' should be displayed in the console. Great!

3. Now we want to actually add something to our state when the user presses our nice button. This is done by, reading from state (aka this.state.KEY), modifying state (some good action), and updating our state (this.setState({key: modifiedState})).

Inside the addTodo function add
```js
// READ
const currentItems = this.state.todoList

// MODIFY
currentItems.push(item)

// UPDATE
this.setState({todoList: currentItems})
```
Now our state is updated but we can't see anything. We have to read todoList from state!

4. As we can see from MainContent.js our 
```js
<TodoList>
```
has a prop called todos which reads from our state with "this.state.todoList". Just what we need. Open the TodoList.js file and follow the instructions inside!

5. By now you should have a working button and a todolist that is rendered but always with the same item ("ITEM"). Verify it by saving all files and go to your webapp 

6. What we want now is a way for users to input text as a todo-item. Go back to MainContent.js
Somewhere inside 
```html
    <div className="MainContent"> ... </div>
``` 

add:
```html
<div>
    <label>InputLabel</label>
    <input></input>
</div>
```
If you save the file a input with inputlabel should now be rendered.

7. Before adding a new function we know that we want a new state item to handle the input. Inside our state in MainContent.js add a new item e.g userInput: '' . Remember that it's an object so you most likely need a comma after the todoList row!
8. Now we want to utilize our new state variable and input. This is done by using a onChange method on the input. Add a new function below the addTodo function which is called something good, maybe "handleUserInput". The argument into this will be an event
```js
handleUserInput(event) {
    console.log(event.target.value)
}
```
9. Add: 
```js
<input onChange={(event) => handleUserInput(event)}> ...
```
Now if you save and type something inside the input on the webapp you (in the console). Should see the values entered repeated back to you. NICE!
10. What we want to do now is 2 things, 1) Set our userInput state if the input changes and 2) make use of!
Start by implementing the handleUserInput function. This is done by, read, update. 

Step 1: 
```js
// READ
const userIput = event.target.value
// UPDATE
this.setState({userInput})
```
Step2: On the button tag, change the parameter addTodo("ITEM") to --> 

```js
addTodo(this.state.userInput) 
```
Save and try out the application. Now you should have a working todoList!! Good job!