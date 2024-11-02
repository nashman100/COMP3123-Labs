import React, {useState} from 'react'
import './App.css';

function App() {

  const [studentId] = useState('101024415');
  const [name] = useState('Nash Gill');
  const college = 'George Brown College, Toronto';

  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        style={{ width: '300px', height: '300px', marginBottom: '20px' }}
      />
      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>
      <p><strong>{studentId}</strong></p>
      <p><strong>{name}</strong></p>
      <p><strong>{college}</strong></p>
    </div>
  );
}

export default App;
