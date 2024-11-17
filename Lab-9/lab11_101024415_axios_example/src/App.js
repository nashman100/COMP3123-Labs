import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import PersonList from './components/PersonList';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<PersonList/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
