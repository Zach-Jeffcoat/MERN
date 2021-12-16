import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'John'} lastName={'Stanham'} age={24} hairColor={'Auburn'} initialAge={24}/>
      <PersonCard firstName={'Jennifer'} lastName={'Inskeep'} age={28} hairColor={'Dirty Blonde'} initialAge={28}/>
      <PersonCard firstName={'Larrisa'} lastName={'Hall'} age={34} hairColor={'Brunette'} initialAge={34}/>
      <PersonCard firstName={'Sean'} lastName={'Kiser'} age={33} hairColor={'Raven Black'} initialAge={33}/>
    </div>
  );
}

export default App;
