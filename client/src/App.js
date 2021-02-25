import react from 'react';
import {Router} from '@reach/router';
import AllThings from './components/AllThings';
import EditThing from './components/EditThing';
import NewThing from './components/NewThing';
import OneThing from './components/OneThing';
import './App.css';

function App() {
  const NotFound = () => {
    return (
      <div>Route not Found</div>
    )
  };
  return (
    <div className="App">
      <Router>
        <AllThings path="/things" />
        <EditThing path="/things/:id/edit" />
        <NewThing path="/things/new" />
        <OneThing path="/things/:id" />
        <NotFound default />
      </Router>

    </div>
  );
}

export default App;
