import { useState } from 'react'
import './App.css'
import Form from './Form';
import Turnos from './Turnos';

function App(){  
  
  const [pacientes,setPacientes]=useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addPatient= (patient) => {
    setPacientes([...pacientes,patient]);
    console.log(pacientes)
   };
  
   

 function borrar(){
    setPacientes([])
    
  };


  return (
   <div className="App">
      <h1>Registro de estudiantes</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>

      <button onClick={borrar}>Borrar la lista</button>  
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
   </div>
  );
}

export default App
