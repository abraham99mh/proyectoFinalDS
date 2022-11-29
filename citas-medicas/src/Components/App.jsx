import React, { useState } from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';
import Start from './Start';

function App() {

  //const estudiosClinicos = ["Estudio clinico 1", "Estudio clinico 2", "Estudio clinico 3", "Estudio clinico 4", "Estudio clinico 5"]

  const [session, updateSession] = useState(false);
  const [logIn, changeLogIn] = useState(true);

  const [users, updateUsers] = useState([
    {
      "id": "1",
      "username": "abraham",
      "password": "admin",
      "email": "xabr12@gmail.com"
    },
    {
      "id": "2",
      "username": "asd",
      "password": "asd",
      "email": "asd@asd.com"
    },
  ]);

  const cerrarSesion = () => {
    updateSession(false);
  }

  return (
    <div className="container-fluid px-0">
      <h1 className='text-center bg-info text-light py-3'>Citas médicas</h1>
      {session ?
        <>
          <button class="btn btn-outline-light position-absolute top-0 end-0 m-4" onClick={cerrarSesion}>Cerrar sesión</button>
          <Start />
        </>
        :
        <>
          {
            logIn ? <LogIn updateSession={updateSession} users={users} changeLogIn={changeLogIn} /> :
              <SignIn updateSession={updateSession} users={users} updateUsers={updateUsers} changeLogIn={changeLogIn} />
          }

        </>
      }
    </div>
  );
}
export default App;
