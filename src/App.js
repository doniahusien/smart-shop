import { Provider } from 'react-redux';
import store from './store';
import Routing from './router/router';
import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>   
        <Routing/>
      </div>
    </Provider>
  );
};

export default App;
