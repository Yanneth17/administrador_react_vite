import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //1. Genero los Props
  
  const [pacientes, setPacientes] = useState([]); // setPacientes Arreglo de todos los clientes 
  const [paciente, setPaciente] = useState({});


  //useEffect: Carga cuando el componente este listo, [] Arreglo vacio para que se ejecute una sola vez
  //Va a obtener lo que ya esta en localStorage, si no hay nada agrega arreglo vacio, para que no se limpie el localStorage
  useEffect(() => {
    const obtenerLS = () => {
          const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
          setPacientes(pacientesLS)
        }
        obtenerLS()
    }, [] )

  // localStorage - Convertir arreglo de pacientes en string
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes] )

  const eliminarPaciente = (id) => {
    // De todos los pacientes, me traigo todos los que son diferentes al id que le paso
    const pacientesActuales = pacientes.filter( paciente => paciente.id !== id);
    // Los agrego al setPacientes, que es donde se almacenan todos los pacientes
    setPacientes(pacientesActuales)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header/>
      
      <div className="mt-12 md:flex">
          <Formulario
          // props
          pacientes={pacientes}
          setPacientes= {setPacientes} 
          paciente={paciente}
          setPaciente= {setPaciente}
          />
          <ListadoPacientes 
          // 2. Paso el prop al componente
          pacientes= {pacientes} 
          setPaciente= {setPaciente} 
          eliminarPaciente= {eliminarPaciente}
          />
      </div>

    </div>
  )
}

export default App
