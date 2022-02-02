import './App.css';
import NewAuthor from './components/New';
import AllAuthors from './components/Dashboard';
import EditAuthor from './components/Edit';
import {Router} from '@reach/router';


function App() {

  return (
    <div className="App">
      <Router>
        <AllAuthors path="/" />
        <NewAuthor path="/new" />
        <EditAuthor path="/Author/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
