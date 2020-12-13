# React exercise 1
1. install redux with `npm install redux react-redux --save` 
2. Add a new folder called actions inside src/
3. Add a file called index.js in actions folder
4. Add: 
```js
export const increment = () => ({
  type: 'INCREMENT_COUNTER'
})

export const decrement = () => ({
  type: 'DECREMENT_COUNTER'
})

```
1. Add a new folder called reducers inside src/
2. Add a file called index.js in reducers folder
3. Add :
```js
import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
  counter
})

```
7. Add a file called counter.js inside reducers folder
8. Add:
```js

const counter = (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {count: state.count + 1}
    case 'DECREMENT_COUNTER':
        return {count: state.count - 1}
    default:
        return state
  }
}

export default counter

``` 
10. Add Provider to App.js and import and create store at top of file: 
```js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore();
```
Then wrap the Counter component with the provider
```js
  <Provider store={store}>
    <Counter/>
  </Provider>
```

10. In your Counter.js now import `import { connect } from 'react-redux';` at the top of the file
11. To access the counter value we have to make use of the mapStateToProps function, the value will then be available through the component props. e.g (this.props.count)
```js
// Add this function to the bottom of the file:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Counter);

```
12. Increment and decrement can now be re-written as follows: 
```js
 increment = () => {
    this.props.dispatch({ type: 'INCREMENT_COUNTER' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT_COUNTER' });
  }
``` 
13. Now you should have a working Redux setup!

## Bonus
- Make a new component that uses your counter state
- Make a new action that takes a value for increment (input field needed + argument to a new action!)