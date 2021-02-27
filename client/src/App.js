import react from 'react';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import NewPet from './components/NewPet';
import OnePet from './components/OnePet';
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
        <AllPets path="/pets" />
        <EditPet path="/pets/:id/edit" />
        <NewPet path="/pets/new" />
        <OnePet path="/pets/:id" />
        <NotFound default />
      </Router>

    </div>
  );
}

export default App;
