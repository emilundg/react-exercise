import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter'
import Todos from './components/Todos'
import rootReducer from './reducers/'
const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
              {console.log(store.getState())}
                <Counter/>
                <Todos/>
            </Provider>
        </div>
    );
}

export default App;
