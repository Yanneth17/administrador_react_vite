// import { useEffect } from 'react'
import Paciente from "./Paciente"

// 3. Tomo el prop en el componente, se extrae el arreglo
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // verificar que se creo un nuevo paciente
    // useEffect (() => {
    //   if(pacientes.length > 0)
    //     console.log('Nuevo paciente')
    // }, [pacientes]);

  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (

          <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        
              <p className="text-xl mt-5 text-center mb-10"> 
                Administra tus {' '}
                <span className="text-indigo-600 font-bold"> Pacientes y Citas </span>
              </p>

              {pacientes.map( paciente => (
                  <Paciente
                  // 4. Ya puedo pasar la prop al componente donde la voy a utilizar
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />  
              ))}
          </>

        ) : (
          <>
               <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
               <p className="text-xl mt-5 text-center mb-10"> 
                        Para Administrar {' '}
                    <span className="text-indigo-600 font-bold"> Registra Pacientes </span>
                </p>               
          </>
        )}



      </div>
  )
}

export default ListadoPacientes