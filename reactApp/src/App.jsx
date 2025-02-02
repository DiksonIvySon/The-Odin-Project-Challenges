import { useState } from 'react'
import './App.css'


function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  
  return (
     <>
        <label htmlFor="">first name</label>
        <input type="text"
               value={name} 
               onChange={(event) => setName(event.target.name)}/>
        <label htmlFor="">last name</label>
        <input type="text"
               value={surname} 
               onChange={(event) => setSurname(event.target.surname)}/>
        <h1>{name}</h1>
        <h1>{surname}</h1>
     </>
  )
}


export default App
