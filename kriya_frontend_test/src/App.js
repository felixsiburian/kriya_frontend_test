import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Page1 from './containers/Page1';
import Page2 from './containers/Page2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
