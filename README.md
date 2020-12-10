# React exercise 1
1. Remove all bloat
2. Add a new folder in src called "components"
3. Add a new file called ButtonFunctional.js
4. Take inspiration from bare minimum functional component: 
```js
import React from 'react'
const MyComponent = () => {
    return (<div> Functional </div>)
}
export default MyComponent
```
6. Import component into App.js 
```js
import ButtonFunctional from './components/ButtonFunctional'
```
7. Add
```js
<ButtonFunctional/>
``` 
inside Apps return
8. See what happens on your localhost, hopefully you will see your component rendered. HOORAY!
9. Add a new file called ButtonClass.js
10. Take inspiration from bare minimum functional component:
```js
import React from 'react'
class MyComponent extends React.Component {
    render() {
        return (<div> Functional </div>)
    }
}
export default MyComponent
```
11. Import component in App.js
12. Add to return function (remember, only one element should be returned from render/return function)
13. Voila, you should now see your two different components!

# React exercise 2
## Project structure
1. Inside components **EITHER** add a folder called styles where you keep all your component css **OR** make every component a folder containing ComponentFile.js **AND** the style file
2. With the help of all the cheat sheets and each other, start making a todo-list! Remember to make small re-usable components

# Useful links
### Event cheat sheet
https://frontarm.com/james-k-nelson/react-events-cheatsheet/

### React cheat sheet
https://devhints.io/react

### JSX cheat sheet
https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet