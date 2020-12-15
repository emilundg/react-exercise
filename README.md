# React exercise 1
1. Add state to MainContent.js that keeps control of a loader state
2. make use of the componentDidMount function to change loader state
```js
componentDidMount() {
    // Add a javascript timer that after being executed changes the loading state to false
    // setTimeout(() => {
        // DO SOMETHING HERE
    // }), 3000)
}
``` 
3. Conditional render loading/message depending on loading state
```js
{this.state.loading ? <Loader/> : <Message/>}
```
4. Now your component should render conditionally! :)
5. Install `npm install --save prop-types`
6. In `Message.js` import at top `import PropTypes from 'prop-types';`
7. Add relevant proptypes for the properties sent to the component, make use of the official docs! https://www.npmjs.com/package/prop-types
Hint: MyComponent.propTypes = {
  myProp: PropTypes.bool
};