// import { useEffect } from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    // verificar que el componente esta listo 
    // useEffect (() => {
    //     console.log('Componente Listo')
    // }, []);

    // Destructuración
    const { nombre, propietario, email, fecha, sintomas, id} = paciente 

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas Eliminar este Paciente?');
        if (respuesta) {
            eliminarPaciente
        }
    }

    return (
    
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
                <span className="font-normal normal-case ">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
                <span className="font-normal normal-case ">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> E-mail: {' '}
                <span className="font-normal normal-case ">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha: {' '}
                <span className="font-normal normal-case ">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {' '}
                <span className="font-normal normal-case ">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">

                <button type="button"
                className="py-2 px-10 bg-lime-600 hover:bg-lime-700 text-white font-bold uppercase rounded-lg"
                // pasar argumento a una función con un callback, por que le estamos pasando un argumento
                onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button type="button" 
                className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >Eliminar</button>

            </div>
    </div>
    
  )
}

export default Paciente