import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

   const [nombre, setNombre] = useState('');
   const [propietario, setPropietario] = useState('');
   const [email, setEmail] = useState('');
   const [fecha, setFecha] = useState('');
   const [sintomas, setSintomas] = useState('');

   const [error, setError] = useState(false)

   // Identifica un evento
   useEffect( ( ) => {
      // Forma de comprobar que un cambio surgio, No esta vacio 
     if(Object.keys(paciente).length > 0) {
      // paciente.nombre Esta en memoria y es al que le estoy dando Click
         setNombre(paciente.nombre)
         setPropietario(paciente.propietario)
         setEmail(paciente.email)
         setFecha(paciente.fecha)
         setSintomas(paciente.sintomas)
     }
   }, [paciente]);

   const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36)

      return random + fecha
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Enviando Formulario')

      // Validar formulario // Include- Metodo de los arreglos
      if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
         console.log('Hay al menos un campo vacio')

         setError(true)
         return;
      } 

      setError(false)

      // Nuevo paciente
      const objetoPacientes = {
         nombre,
         propietario,
         email,
         fecha,
         sintomas
      }

      // Validar si estamos editando
      if (paciente.id) {
         // Editando el registro
         objetoPacientes.id = paciente.id
         // pacienteState hace referencia a lo que esta en el state sin modificarse, e identificamos cual es el paciente que estamos editando
         const pacientesActualizados = pacientes.map( pacienteState => 
            // El segundo return de pacienteState me permite que no se eliminen los demás registros y solo me retorne el que estoy editando
         pacienteState.id === paciente.id ? objetoPacientes : pacienteState )

         setPacientes(pacientesActualizados)
         // Despues de editar lo regresamos a un Objeto
         setPaciente({})
            
      } else {
         // Nuevo Registro- Tomamos una copia del State y le agregamos el nuevo objeto
         objetoPacientes.id = generarId();
         setPacientes([...pacientes, objetoPacientes]);
      }

      //Reiniciar el formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
   }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10"> 
          Añade Pacientes y {' '}
        <span className="text-indigo-500 font-bold">Administralos</span>
        </p>

        <form 
            // eventos en React
            onSubmit={handleSubmit}
            action="" 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
         >
           
            {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

           <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">Nombre Mascota:</label>
              <input id="mascota" type="text" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
              placeholder="Nombre de la Mascota"
              value={nombre} onChange={(e) => setNombre(e.target.value)} />
           </div>

           <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-600 uppercase font-bold">Nombre Propietario:</label>
              <input id="propietario" type="text" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
              placeholder="Nombre del Propietario"
              value={propietario} onChange={(e) => setPropietario(e.target.value)} 
              />
           </div>

           <div className="mb-5">
              <label htmlFor="email" className="block text-gray-600 uppercase font-bold">E-mail Propietario:</label>
              <input id="email" type="email" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
              placeholder="E-mail Contacto Propietario"
              value={email} onChange={(e) => setEmail(e.target.value)} 
              />
           </div>

           <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-600 uppercase font-bold">Alta:</label>
              <input id="alta" type="date" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
              value={fecha} onChange={(e) => setFecha(e.target.value)} 
              />
           </div>

           <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">Síntomas:</label>
              <textarea name="" id="sintomas" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" cols="30" rows="5" 
              placeholder="Describe los Síntomas"
              value={sintomas} onChange={(e) => setSintomas(e.target.value)} 
              ></textarea>
           </div>

          <input type="submit" 
               className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all hover:bg-indigo-700" 
               // Un if ternario por que despues del return, no se puede utilizar if
               value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
        </form>
    </div>
  )
}

export default Formulario
