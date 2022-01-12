import {Router} from '@reach/router'
import Form from './components/Form'
import Display from './components/Display'
import './App.css';

function App() {
  return(
    <div className="App">
    <Router>
      <Form path="/"/>
      <Display path="/display:typ/:id"/>
    </Router>


</div>
  );
}

export default App;