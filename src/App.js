import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
