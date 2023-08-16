import { useState } from "react";
function Form({onAddPatient}){
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");

    const handleSubmit = (e)=>{
         e.preventDefault();
         console.log(nombre);
         console.log(apellido);
         
        
        if(nombre && apellido){
            onAddPatient({nombre,apellido});
            setNombre("");
            setApellido(""); 


    const  validateNombre = (nombre) =>{
       }// Validación de longitud mínima y espacios en blanco al comienzo
         if (newUsername.length < 3) {
        setErrorMessage('El nombre de usuario debe tener al menos 3 caracteres');
      } else if (newUsername.trim() !== newUsername) {
        setErrorMessage('El nombre de usuario no puede empezar con un espacio en blanco');
      } else {
        setErrorMessage('');

    }
      
      }


    }

    

    return (

    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
        <button type="submit">Agregar alumno</button>        
    </form>
    
        )
}

export default Form;


    