import React, { useState } from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';
import Start from './Start';

function App() {

  //const estudiosClinicos = ["Estudio clinico 1", "Estudio clinico 2", "Estudio clinico 3", "Estudio clinico 4", "Estudio clinico 5"]

  const [session, updateSession] = useState(false);
  const [logIn, changeLogIn] = useState(true);

  const [user, changeUser] = useState("");

  const [users, updateUsers] = useState([
    {
      "username": "abraham",
      "password": "admin",
      "email": "xabr12@gmail.com"
    },
    {
      "username": "asd",
      "password": "asd",
      "email": "asd@asd.com"
    },
  ]);

  const [data, updateData] = useState([
    {
        "date": new Date(2022, 10, 28),
        "hour": "9:00",
        "user": "none",
        "type": ""
    },
    {
        "date": new Date(2022, 10, 28),
        "hour": "11:00",
        "user": "none",
        "type": ""
    },
    {
        "date": new Date(2022, 10, 29),
        "hour": "14:00",
        "user": "none",
        "type": ""
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
          <button className="btn btn-outline-light position-absolute top-0 end-0 m-4" onClick={cerrarSesion}>Cerrar sesión</button>
          <Start data={data} updateData={updateData} user={user} />
        </>
        :
        <>
          {
            logIn ? <LogIn updateSession={updateSession} users={users} changeLogIn={changeLogIn} changeUser={changeUser} /> :
              <SignIn updateSession={updateSession} users={users} updateUsers={updateUsers} changeLogIn={changeLogIn} changeUser={changeUser} />
          }

        </>
      }
    </div>
  );
}
export default App;
