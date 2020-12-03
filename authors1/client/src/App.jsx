import './App.css';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor'
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Main path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/edit/:_id"/>
      </Router>
    </div>
  );
}

export default App;
