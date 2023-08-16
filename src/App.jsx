import { useState } from 'react'
import './App.css'
import Form from './Form';
import Turnos from './Turnos';

function App(){  
  
  const [pacientes,setPacientes]=useState([]);

  const addPatient= (patient) => {
    setPacientes([...pacientes,patient]);
    console.log(pacientes)
                                 };
  

 function borrar(){
    setPacientes([]);
  }


  return (
   <div className="App">
      <h1>Registro de estudiantes</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>

      <button onClick={borrar}>Borrar la lista</button>  

   </div>
  );
}

export default App
